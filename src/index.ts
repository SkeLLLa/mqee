import EmitterListener from './emitterListener';
import { Qlobber } from 'qlobber';

function defaultResolve(): boolean {
  return true;
}

function defaultReject(): boolean {
  return false;
}

export interface ConstructorOptions {
  wildcardOne?: string;
  wildcardSome?: string;
  separator?: string;
  concurrency?: number;
}

export interface EmitMessage {
  topic: string;
  [key: string]: any;
}

export type HandlerFunction<TContext> = (message: EmitMessage, context?: TContext) => Promise<void>;

export interface IteratorEmitMessage<TContext> {
  message: EmitMessage;
  context?: TContext;
}

export interface IteratorResult<T> {
  done: boolean;
  value: T;
}
export interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
  throw?(e?: any): IteratorResult<T>;
}

class Emitter {
  private _matcher: Qlobber<string>;
  private _concurrency = Infinity;
  private _listenerMap: Map<string, EmitterListener>;
  constructor({
    wildcardOne = '+',
    wildcardSome = '#',
    separator = '/',
    concurrency = Infinity, // not used for now
  }: ConstructorOptions = {}) {
    this._matcher = new Qlobber({
      wildcard_one: wildcardOne,
      wildcard_some: wildcardSome,
      separator,
    });
    this._concurrency = concurrency || this._concurrency;

    this._listenerMap = new Map();
  }

  private _removeListener(listener?: EmitterListener): void {
    if (!listener) {
      return;
    }
    this._matcher.remove(listener.topic, listener.id);
    this._listenerMap.delete(listener.id);
  }

  async emit(options: EmitMessage): Promise<void> {
    const { topic } = options;
    const listeners = this._matcher.match(topic); // todo: check

    if (!listeners) {
      return;
    }

    await Promise.all(
      listeners.map((listenerId) => {
        const listener = this._listenerMap.get(listenerId);
        if (!listener) {
          return false;
        }
        return listener.fn
          .call(null, options, listener.context)
          .then(defaultResolve)
          .catch(defaultReject)
          .finally(() => {
            if (listener.once) {
              this._removeListener(listener);
            }
          });
      })
    );
  }

  addListener<TContext>(
    topic: string,
    handler: HandlerFunction<TContext>,
    context?: TContext,
    once = false
  ): EmitterListener {
    const listener = new EmitterListener(topic, handler, context, once);
    this._matcher.add(topic, listener.id);
    this._listenerMap.set(listener.id, listener);
    return listener;
  }

  removeListener<TContext>(listenerId: string): void;
  removeListener<TContext>(listener: EmitterListener): void;
  removeListener<TContext>(topic: string, handler: HandlerFunction<TContext>): void;
  removeListener<TContext>(
    topic: string,
    handler: HandlerFunction<TContext>,
    context: TContext
  ): void;
  removeListener<TContext>(
    topic: string | EmitterListener<TContext>,
    handler?: HandlerFunction<TContext> | string,
    context?: TContext
  ): void {
    if (topic instanceof EmitterListener) {
      this._removeListener(topic);
      return;
    }
    if (EmitterListener.isValid(topic)) {
      const listener = this._listenerMap.get(topic);
      this._removeListener(listener);
    }
    for (const el of this._listenerMap.values()) {
      if (el.topic === topic && el.fn === handler && el.context === context) {
        this._removeListener(el);
      }
    }
  }

  removeAllListeners(topic: string): void {
    this._matcher.remove(topic);
    for (const el of this._listenerMap.values()) {
      if (el.topic === topic) {
        this._listenerMap.delete(el.id);
      }
    }
  }

  on<TContext>(
    topic: string,
    handler: HandlerFunction<TContext>,
    context?: TContext
  ): EmitterListener {
    return this.addListener(topic, handler, context, false);
  }

  once<TContext>(
    topic: string,
    handler: HandlerFunction<TContext>,
    context?: TContext
  ): EmitterListener {
    return this.addListener(topic, handler, context, true);
  }

  off<TContext>(topic: string, handler: HandlerFunction<TContext>): void;
  off<TContext>(topic: string, handler: HandlerFunction<TContext>, context: TContext): void;
  off<TContext>(topic: string, handler: HandlerFunction<TContext>, context?: TContext): void {
    return this.removeListener(topic, handler, context);
  }

  // [Symbol.asyncIterator]<TContext>(
  //   topic: string,
  //   context?: TContext
  // ): Iterator<IteratorEmitMessage<TContext>> {
  //   return {
  //     next(): IteratorResult<IteratorEmitMessage<TContext>> {
  //       // await some function
  //       return {
  //         value: {
  //           message: { topic: 'xxx' },
  //           context,
  //         },
  //         done: false,
  //       };
  //     },
  //   };
  // }
}

export default Emitter;
