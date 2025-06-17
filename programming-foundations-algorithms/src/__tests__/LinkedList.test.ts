import { describe, it, expect } from 'vitest';
import { LinkedList } from '../data-structures/LinkedList';
import { Node } from '../data-structures/Node';

/**
 * LinkedList Test Suite
 *
 * This test suite will guide you through implementing a LinkedList data structure in TypeScript.
 * Follow the failing tests one by one to build your implementation.
 *
 * Your LinkedList should implement these core operations:
 * - append: Add a node to the end of the list
 * - prepend: Add a node to the beginning of the list
 * - delete: Remove a node with a specific value
 * - find: Find a node with a specific value
 * - toArray: Convert the linked list to an array
 * - size: Get the number of nodes in the list
 * - getHead: Get the first node in the list
 * - getTail: Get the last node in the list
 */

describe('Node', () => {
  it('should create a node with the given value', () => {
    const node = new Node(42);
    expect(node).toBeDefined();
    expect(node.value).toBe(42);
    expect(node.next).toBeNull();
  });

  it('should link to another node', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);

    node1.next = node2;

    expect(node1.next).toBe(node2);
    expect(node1.next.value).toBe(2);
    expect(node2.next).toBeNull();
  });

  it('should work with different data types', () => {
    const stringNode = new Node<string>('hello');
    const numberNode = new Node<number>(123);
    const objectNode = new Node<{ id: number }>({ id: 1 });

    expect(stringNode.value).toBe('hello');
    expect(numberNode.value).toBe(123);
    expect(objectNode.value).toEqual({ id: 1 });
  });
});

describe('LinkedList', () => {
  // Import your LinkedList implementation
  // You'll need to create these files:
  // - src/data-structures/LinkedList.ts (for the LinkedList class)
  // - src/data-structures/Node.ts (for the Node class)

  it('should create an empty linked list', () => {
    const list = new LinkedList();

    expect(list).toBeDefined();
    expect(list.size()).toBe(0);
    expect(list.toArray()).toEqual([]);
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it('should append nodes to the linked list', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.size()).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);

    expect(list.getHead()?.value).toBe(1);
    expect(list.getTail()?.value).toBe(3);

    // Check that nodes are properly linked
    let currentNode = list.getHead();
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    expect(values).toEqual([1, 2, 3]);
  });

  it('should prepend nodes to the linked list', () => {
    const list = new LinkedList<number>();

    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.size()).toBe(3);
    expect(list.toArray()).toEqual([3, 2, 1]);
    expect(list.getHead()?.value).toBe(3);
    expect(list.getTail()?.value).toBe(1);

    // Check that nodes are properly linked
    let currentNode = list.getHead();
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    expect(values).toEqual([3, 2, 1]);
  });

  it('should delete nodes from the linked list', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);

    // Delete from the middle
    list.delete(3);
    expect(list.toArray()).toEqual([1, 2, 4, 5]);

    // Verify links are properly updated after deletion
    let currentNode = list.getHead();
    expect(currentNode.value).toBe(1);
    expect(currentNode.next.value).toBe(2);
    expect(currentNode.next.next.value).toBe(4);
    expect(currentNode.next.next.next.value).toBe(5);
    expect(currentNode.next.next.next.next).toBeNull();

    // Delete from the beginning
    list.delete(1);
    expect(list.toArray()).toEqual([2, 4, 5]);
    expect(list.getHead().value).toBe(2);

    // Verify links are properly updated after deletion
    currentNode = list.getHead();
    expect(currentNode.value).toBe(2);
    expect(currentNode.next.value).toBe(4);
    expect(currentNode.next.next.value).toBe(5);
    expect(currentNode.next.next.next).toBeNull();

    // Delete from the end
    list.delete(5);
    expect(list.toArray()).toEqual([2, 4]);
    expect(list.getTail().value).toBe(4);

    // Verify links are properly updated after deletion
    currentNode = list.getHead();
    expect(currentNode.value).toBe(2);
    expect(currentNode.next.value).toBe(4);
    expect(currentNode.next.next).toBeNull();

    // Delete non-existent value
    list.delete(10);
    expect(list.toArray()).toEqual([2, 4]);
  });

  it('should delete the second node from the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    list.delete(2);
    expect(list.toArray()).toEqual([1, 3]);
    expect(list.size()).toBe(2);

    // Verify links are properly updated
    const currentNode = list.getHead();
    expect(currentNode?.value).toBe(1);
    expect(currentNode?.next?.value).toBe(3);
  });

  it('should delete the second node which is the last node', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    list.delete(2);
    expect(list.toArray()).toEqual([1]);
    expect(list.size()).toBe(1);
  });

  it('should delete a node from the middle of the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);

    list.delete(3);

    expect(list.toArray()).toEqual([1, 2, 4, 5]);
    expect(list.size()).toBe(4);

    // Verify links are properly updated
    const head = list.getHead();
    if (head) {
      expect(head.value).toBe(1);
      if (head.next) {
        expect(head.next.value).toBe(2);
        if (head.next.next) {
          expect(head.next.next.value).toBe(4);
          if (head.next.next.next) {
            expect(head.next.next.next.value).toBe(5);
            expect(head.next.next.next.next).toBeNull();
          }
        }
      }
    }
  });

  it('should delete a node from the beginning of the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    list.delete(1);

    expect(list.toArray()).toEqual([2, 3]);
    expect(list.size()).toBe(2);

    // Verify head is updated
    const head = list.getHead();
    if (head) {
      expect(head.value).toBe(2);
      expect(head.next?.value).toBe(3);
      expect(head.next?.next).toBeNull();
    }
  });

  it('should delete a node from the end of the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    list.delete(3);

    expect(list.toArray()).toEqual([1, 2]);
    expect(list.size()).toBe(2);

    const anotherList = new LinkedList<number>();
    anotherList.append(1);
    anotherList.append(2);
    anotherList.append(3);
    anotherList.append(4);
    anotherList.append(5);

    anotherList.delete(5);

    expect(anotherList.toArray()).toEqual([1, 2, 3, 4]);
    expect(anotherList.size()).toBe(4);
  });

  it('should handle deletion when the value is not in the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    list.delete(10); // Value not in list

    expect(list.toArray()).toEqual([1, 2]);
    expect(list.size()).toBe(2);
  });

  it('should handle deletion from a list with a single node', () => {
    const list = new LinkedList<number>();
    list.append(1);

    list.delete(1);

    expect(list.toArray()).toEqual([]);
    expect(list.size()).toBe(0);
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it('should handle deletion from an empty list', () => {
    const list = new LinkedList<number>();

    list.delete(1); // Attempting to delete from empty list

    expect(list.toArray()).toEqual([]);
    expect(list.size()).toBe(0);
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it('should find nodes in the linked list', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    const node2 = list.find(2);
    expect(node2).toBeDefined();
    expect(node2?.value).toBe(2);
    expect(node2?.next?.value).toBe(3);

    const node1 = list.find(1);
    expect(node1).toBeDefined();
    expect(node1?.value).toBe(1);
    expect(node1?.next?.value).toBe(2);

    const node3 = list.find(3);
    expect(node3).toBeDefined();
    expect(node3?.value).toBe(3);
    expect(node3?.next).toBeNull();

    const nonExistentNode = list.find(4);
    expect(nonExistentNode).toBeNull();
  });

  it('should find a node in the middle of the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const node = list.find(2);

    expect(node).not.toBeNull();
    if (node) {
      expect(node.value).toBe(2);
      expect(node.next?.value).toBe(3);
    }
  });

  it('should find the first node in the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    const node = list.find(1);

    expect(node).not.toBeNull();
    if (node) {
      expect(node.value).toBe(1);
      expect(node.next?.value).toBe(2);
    }
  });

  it('should find the last node in the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const node = list.find(3);

    expect(node).not.toBeNull();
    if (node) {
      expect(node.value).toBe(3);
      expect(node.next).toBeNull();
    }
  });

  it('should return null when finding a non-existent value', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    const node = list.find(99);

    expect(node).toBeNull();
  });

  it('should return null when finding in an empty list', () => {
    const list = new LinkedList<number>();

    const node = list.find(1);

    expect(node).toBeNull();
  });

  it('should handle edge cases', () => {
    const list = new LinkedList<number>();

    // Delete from empty list
    list.delete(1);
    expect(list.toArray()).toEqual([]);
    expect(list.size()).toBe(0);

    // Single node operations
    list.append(1);
    expect(list.getHead()?.value).toBe(1);
    expect(list.getTail()?.value).toBe(1);
    expect(list.getHead()).toBe(list.getTail()); // Head and tail should be the same node
    expect(list.size()).toBe(1);

    list.delete(1);
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.size()).toBe(0);

    // Prepend to empty list
    list.prepend(2);
    expect(list.getHead()?.value).toBe(2);
    expect(list.getTail()?.value).toBe(2);
    expect(list.getHead()).toBe(list.getTail()); // Head and tail should be the same node
    expect(list.size()).toBe(1);
  });

  it('should handle a list with a single node', () => {
    const list = new LinkedList<number>();

    list.append(1);

    expect(list.size()).toBe(1);

    const head = list.getHead();
    const tail = list.getTail();

    expect(head).not.toBeNull();
    expect(tail).not.toBeNull();

    if (head && tail) {
      expect(head.value).toBe(1);
      expect(tail.value).toBe(1);
      expect(head).toBe(tail); // Head and tail should be the same node
      expect(head.next).toBeNull();
    }
  });

  it('should handle prepending to an empty list', () => {
    const list = new LinkedList<number>();

    list.prepend(1);

    expect(list.size()).toBe(1);

    const head = list.getHead();
    const tail = list.getTail();

    expect(head).not.toBeNull();
    expect(tail).not.toBeNull();

    if (head && tail) {
      expect(head.value).toBe(1);
      expect(tail.value).toBe(1);
      expect(head).toBe(tail); // Head and tail should be the same node
      expect(head.next).toBeNull();
    }
  });

  it('should handle appending to an empty list', () => {
    const list = new LinkedList<number>();

    list.append(1);

    expect(list.size()).toBe(1);

    const head = list.getHead();
    const tail = list.getTail();

    expect(head).not.toBeNull();
    expect(tail).not.toBeNull();

    if (head && tail) {
      expect(head.value).toBe(1);
      expect(tail.value).toBe(1);
      expect(head).toBe(tail); // Head and tail should be the same node
    }
  });

  it('should work with different data types', () => {
    const numberList = new LinkedList<number>();
    numberList.append(1);
    numberList.append(2);
    expect(numberList.toArray()).toEqual([1, 2]);

    const stringList = new LinkedList<string>();
    stringList.append('hello');
    stringList.append('world');
    expect(stringList.toArray()).toEqual(['hello', 'world']);

    const objectList = new LinkedList<{ id: number; name: string }>();
    objectList.append({ id: 1, name: 'Alice' });
    objectList.append({ id: 2, name: 'Bob' });
    expect(objectList.toArray()).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });

  it('should maintain proper links between nodes', () => {
    const list = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    // Check next pointers
    expect(list.getHead()?.next?.value).toBe(2);
    expect(list.getHead()?.next?.next?.value).toBe(3);
    expect(list.getHead()?.next?.next?.next).toBeNull();

    // Check that the last node points to null
    expect(list.getTail()?.next).toBeNull();

    // Traverse the list manually to verify all links
    let currentNode = list.getHead();
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    expect(values).toEqual([1, 2, 3]);
  });

  it('should maintain proper next pointers between nodes', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const head = list.getHead();

    expect(head).not.toBeNull();
    if (head) {
      expect(head.value).toBe(1);
      expect(head.next).not.toBeNull();

      if (head.next) {
        expect(head.next.value).toBe(2);
        expect(head.next.next).not.toBeNull();

        if (head.next.next) {
          expect(head.next.next.value).toBe(3);
          expect(head.next.next.next).toBeNull();
        }
      }
    }
  });

  it('should ensure the tail node points to null', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const tail = list.getTail();

    expect(tail).not.toBeNull();
    if (tail) {
      expect(tail.value).toBe(3);
      expect(tail.next).toBeNull();
    }
  });

  it('should allow traversal through all nodes via next pointers', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    // Traverse the list manually to verify all links
    let currentNode = list.getHead();
    const values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    expect(values).toEqual([1, 2, 3]);
  });
});
