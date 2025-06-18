/**
 * Node class for LinkedList implementation
 *
 * TODO: Implement this class with the following:
 * - A value property to store the node's data
 * - A next property to reference the next node in the list
 */

export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
