/**
 * Node class for LinkedList implementation
 *
 * TODO: Implement this class with the following:
 * - A value property to store the node's data
 * - A next property to reference the next node in the list
 */

// Your implementation here
export class Node<T> {
  // Implement your Node class here
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
