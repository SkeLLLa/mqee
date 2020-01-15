declare module 'qlobber' {
  export namespace Qlobber {
    interface ConstructorOptions {
      separator?: string;
      wildcard_one?: string;
      wildcard_some?: string;
      max_words?: number;
      max_wildcard_somes?: number;
    }
  }

  export class Qlobber<T> {
    constructor(options?: Qlobber.ConstructorOptions);
    add(topic: string, val: T): Qlobber<T>;
    remove(topic: string, val?: T): Qlobber<T>;
    clear(): Qlobber<T>;
    match(topic: string, ctx?: any): Array<T>;
  }

  // Qlobber;
  // export default null;
}
