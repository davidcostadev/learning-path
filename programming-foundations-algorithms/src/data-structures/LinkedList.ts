import { Node } from './Node';

/**
 * LinkedList Implementation
 *
 * TODO: Implement this class with the following methods:
 * - append(value): Add a node to the end of the list
 * - prepend(value): Add a node to the beginning of the list
 * - delete(value): Remove a node with a specific value
 * - find(value): Find a node with a specific value
 * - toArray(): Convert the linked list to an array
 * - size(): Get the number of nodes in the list
 * - getHead(): Get the first node in the list
 * - getTail(): Get the last node in the list
 */

// Import your Node class

// Your implementation here
export class LinkedList<T> {
  // Implement your LinkedList class here

  count = 0;
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      // const previousTail = this.tail;
      // previousTail.next = newNode;
      this.tail = newNode;
    }

    this.count += 1;
  }

  prepend(value: T) {
    const newNode = new Node(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const previousHead = this.head;
      this.head = newNode;
      this.head.next = previousHead;
    }

    this.count += 1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  delete(value: T) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      const next = this.head.next;
      this.head = next;

      if (this.tail?.value === value) {
        this.tail = null;
      }

      this.count -= 1;

      return;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    if (currentNode?.value === value) {
      previousNode.next = currentNode.next;

      if (this.tail?.value === value) {
        this.tail = previousNode;
      }
      this.count -= 1;

      return;
    }

    while (currentNode && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
    }

    if (!currentNode) {
      return;
    }

    previousNode.next = currentNode?.next;
    if (this.tail?.value === value) {
      this.tail = previousNode;
    }

    this.count -= 1;
  }

  find(value: T) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      return this.head;
    }

    if (this.tail?.value === value) {
      return this.tail;
    }

    let currentNode = this.head.next;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  toArray() {
    const list = [];

    if (this.head) {
      list.push(this.head?.value);
    }

    let next = this.head?.next ?? null;
    while (next !== null) {
      list.push(next.value);
      next = next.next;
    }

    return list;
  }

  size() {
    return this.count;
  }
}
