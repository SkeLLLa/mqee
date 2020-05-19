import { nanoid } from 'nanoid/non-secure';

const PREFIX = '__mqee__';

export function generateId(): string {
  return `${PREFIX}::${nanoid()}`;
}

export function isValid(id: string): boolean {
  return id.startsWith(PREFIX);
}

export default generateId;
