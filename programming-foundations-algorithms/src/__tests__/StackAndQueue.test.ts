import { describe, it, expect } from 'vitest';
import { Stack } from '../data-structures/Stack';
import { Queue } from '../data-structures/Queue';

describe('Stack', () => {
  it('should create an empty stack', () => {
    const stack = new Stack<number>();
    expect(stack).toBeDefined();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeNull();
  });

  it('should push elements to the stack', () => {
    const stack = new Stack<number>();

    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);

    stack.push(3);
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  it('should pop elements from the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeNull();
  });

  it('should handle popping from an empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.pop()).toBeNull();
    expect(stack.size()).toBe(0);
  });

  it('should handle peeking at an empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.peek()).toBeNull();
  });

  it('should maintain LIFO order', () => {
    const stack = new Stack<number>();
    const elements = [1, 2, 3, 4, 5];

    // Push all elements
    for (const element of elements) {
      stack.push(element);
    }

    // Pop all elements and verify LIFO order
    const poppedElements = [];
    while (!stack.isEmpty()) {
      poppedElements.push(stack.pop());
    }

    expect(poppedElements).toEqual([5, 4, 3, 2, 1]);
  });

  it('should work with different data types', () => {
    const numberStack = new Stack<number>();
    numberStack.push(1);
    numberStack.push(2);
    expect(numberStack.pop()).toBe(2);

    const stringStack = new Stack<string>();
    stringStack.push('hello');
    stringStack.push('world');
    expect(stringStack.pop()).toBe('world');

    const objectStack = new Stack<{ id: number }>();
    objectStack.push({ id: 1 });
    objectStack.push({ id: 2 });
    expect(objectStack.pop()).toEqual({ id: 2 });
  });

  it('should clear the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeNull();
  });

  it('should maintain correct internal list order for stack operations', () => {
    const stack = new Stack<number>();

    // Test push operations
    stack.push(1);
    expect(stack.list).toEqual([1]);

    stack.push(2);
    expect(stack.list).toEqual([1, 2]);

    stack.push(3);
    expect(stack.list).toEqual([1, 2, 3]);

    // Test pop operations
    stack.pop();
    expect(stack.list).toEqual([1, 2]);

    stack.pop();
    expect(stack.list).toEqual([1]);

    stack.pop();
    expect(stack.list).toEqual([]);
  });
});

describe('Queue', () => {
  it('should create an empty queue', () => {
    const queue = new Queue<number>();
    expect(queue).toBeDefined();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeNull();
  });

  it('should enqueue elements to the queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(1);

    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    console.log(queue.list);
    expect(queue.peek()).toBe(1);

    queue.enqueue(3);
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  it('should dequeue elements from the queue', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(2);

    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(3);

    expect(queue.dequeue()).toBe(3);
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeNull();
  });

  it('should handle dequeuing from an empty queue', () => {
    const queue = new Queue<number>();
    expect(queue.dequeue()).toBeNull();
    expect(queue.size()).toBe(0);
  });

  it('should handle peeking at an empty queue', () => {
    const queue = new Queue<number>();
    expect(queue.peek()).toBeNull();
  });

  it('should maintain FIFO order', () => {
    const queue = new Queue<number>();
    const elements = [1, 2, 3, 4, 5];

    // Enqueue all elements
    for (const element of elements) {
      queue.enqueue(element);
    }

    // Dequeue all elements and verify FIFO order
    const dequeuedElements = [];
    while (!queue.isEmpty()) {
      dequeuedElements.push(queue.dequeue());
    }

    expect(dequeuedElements).toEqual([1, 2, 3, 4, 5]);
  });

  it('should work with different data types', () => {
    const numberQueue = new Queue<number>();
    numberQueue.enqueue(1);
    numberQueue.enqueue(2);
    expect(numberQueue.dequeue()).toBe(1);

    const stringQueue = new Queue<string>();
    stringQueue.enqueue('hello');
    stringQueue.enqueue('world');
    expect(stringQueue.dequeue()).toBe('hello');

    const objectQueue = new Queue<{ id: number }>();
    objectQueue.enqueue({ id: 1 });
    objectQueue.enqueue({ id: 2 });
    expect(objectQueue.dequeue()).toEqual({ id: 1 });
  });

  it('should clear the queue', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeNull();
  });

  it('should maintain correct internal list order for queue operations', () => {
    const queue = new Queue<number>();

    // Test enqueue operations
    queue.enqueue(1);
    expect(queue.list).toEqual([1]);

    queue.enqueue(2);
    expect(queue.list).toEqual([1, 2]);

    queue.enqueue(3);
    expect(queue.list).toEqual([1, 2, 3]);

    // Test dequeue operations
    queue.dequeue();
    expect(queue.list).toEqual([2, 3]);

    queue.dequeue();
    expect(queue.list).toEqual([3]);

    queue.dequeue();
    expect(queue.list).toEqual([]);
  });

  it('should maintain FIFO order when mixing enqueue and dequeue operations', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.list).toEqual([1, 2]);

    queue.dequeue(); // removes 1
    expect(queue.list).toEqual([2]);

    queue.enqueue(3);
    expect(queue.list).toEqual([2, 3]);

    queue.enqueue(4);
    expect(queue.list).toEqual([2, 3, 4]);

    queue.dequeue(); // removes 2
    expect(queue.list).toEqual([3, 4]);

    queue.dequeue(); // removes 3
    expect(queue.list).toEqual([4]);
  });

  it('should maintain LIFO order when mixing push and pop operations', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    expect(stack.list).toEqual([1, 2]);

    stack.pop(); // removes 2
    expect(stack.list).toEqual([1]);

    stack.push(3);
    expect(stack.list).toEqual([1, 3]);

    stack.push(4);
    expect(stack.list).toEqual([1, 3, 4]);

    stack.pop(); // removes 4
    expect(stack.list).toEqual([1, 3]);

    stack.pop(); // removes 3
    expect(stack.list).toEqual([1]);
  });
});
