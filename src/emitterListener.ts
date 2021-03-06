import { generateId, isValid } from './idGenerator';

export interface EmitMessage {
  topic: string;
  [key: string]: any;
}

export interface EmittedMessage extends EmitMessage {
  subscriptionTopic: string;
}

export type HandlerFunction<TContext> = (
  this: EmitterListener<TContext>,
  message: EmittedMessage,
  context?: TContext
) => Promise<void>;

class EmitterListener<TContext = any> {
  private _id: string;
  private _fn: HandlerFunction<TContext>;
  private _context: TContext | undefined;
  private _once: boolean;
  private _topic: string;

  constructor(topic: string, fn: HandlerFunction<TContext>, context: TContext, once = false) {
    this._id = generateId();
    this._fn = fn;
    this._topic = topic;
    this._context = context;
    this._once = once;
  }

  static isValid(id: string): boolean {
    return isValid(id);
  }

  get id(): string {
    return this._id;
  }

  get fn(): HandlerFunction<TContext> {
    return this._fn;
  }

  get context(): any {
    return this._context;
  }

  get once(): boolean {
    return this._once;
  }

  get topic(): string {
    return this._topic;
  }
}

export default EmitterListener;
