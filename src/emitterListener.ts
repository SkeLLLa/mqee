import hyperid from 'hyperid';

const getId = hyperid();

export interface DecodedId {
  uuid: string;
  count: number;
}

class EmitterListener<TContext = any> {
  private _id: string;
  private _fn: Function;
  private _context: TContext | undefined;
  private _once: boolean;
  private _topic: string;

  constructor(topic: string, fn: Function, context: TContext, once = false) {
    this._id = getId();
    this._fn = fn;
    this._topic = topic;
    this._context = context;
    this._once = once;
  }

  static isValid(id: string): boolean {
    return hyperid.decode(id) !== null;
  }

  get id(): string {
    return this._id;
  }

  get fn(): Function {
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
