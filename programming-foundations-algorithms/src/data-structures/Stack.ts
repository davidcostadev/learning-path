/**
 * A generic Stack implementation following the Last-In-First-Out (LIFO) principle.
 * @template T The type of elements stored in the stack
 */
export interface IStack<T> {
  /**
   * Adds an element to the top of the stack.
   * @param value The value to push onto the stack
   */
  push(value: T): void;

  /**
   * Removes and returns the top element from the stack.
   * @returns The top element of the stack, or null if the stack is empty
   */
  pop(): T | null;

  /**
   * Returns the top element of the stack without removing it.
   * @returns The top element of the stack, or null if the stack is empty
   */
  peek(): T | null;

  /**
   * Returns the number of elements in the stack.
   * @returns The number of elements in the stack
   */
  size(): number;

  /**
   * Checks if the stack is empty.
   * @returns true if the stack contains no elements, false otherwise
   */
  isEmpty(): boolean;

  /**
   * Removes all elements from the stack.
   */
  clear(): void;
}

/**
 * Creates a new Stack instance.
 * (LIFO: Last In, First Out):
 * @template T The type of elements stored in the stack
 */
export class Stack<T> implements IStack<T> {
  list: T[] = [];

  push(value: T) {
    this.list.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.list.pop() ?? null;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.list[this.list.length - 1];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  clear() {
    this.list = [];
  }
}
