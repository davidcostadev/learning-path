/**
 * A generic Queue implementation following the First-In-First-Out (FIFO) principle.
 * @template T The type of elements stored in the queue
 */
export interface IQueue<T> {
  /**
   * Adds an element to the end of the queue.
   * @param value The value to add to the queue
   */
  enqueue(value: T): void;

  /**
   * Removes and returns the first element from the queue.
   * @returns The first element of the queue, or null if the queue is empty
   */
  dequeue(): T | null;

  /**
   * Returns the first element of the queue without removing it.
   * @returns The first element of the queue, or null if the queue is empty
   */
  peek(): T | null;

  /**
   * Returns the number of elements in the queue.
   * @returns The number of elements in the queue
   */
  size(): number;

  /**
   * Checks if the queue is empty.
   * @returns true if the queue contains no elements, false otherwise
   */
  isEmpty(): boolean;

  /**
   * Removes all elements from the queue.
   */
  clear(): void;
}

/**
 * Creates a new Queue instance.
 * (FIFO: First In, First Out):
 * @template T The type of elements stored in the queue
 */
export class Queue<T> implements IQueue<T> {
  list: T[] = [];

  dequeue(): T | null {
    return this.list.shift() ?? null;
  }

  enqueue(value: T): void {
    this.list.push(value);
  }

  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.list[0];
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  size(): number {
    return this.list.length;
  }

  clear(): void {
    this.list = [];
  }
}
