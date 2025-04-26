import { describe, it, expect } from 'vitest';
import { quickSort } from './quicksort';

describe('QuickSort Algorithm', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an array sorted in descending order', () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an array with duplicate elements', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an array with negative numbers', () => {
    const input = [-5, 7, -2, -13, 0, 8, 4];
    const expected = [-13, -5, -2, 0, 4, 7, 8];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an array with one element', () => {
    const input = [42];
    const expected = [42];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should handle an array with all same elements', () => {
    const input = [4, 4, 4, 4, 4];
    const expected = [4, 4, 4, 4, 4];
    expect(quickSort(input)).toEqual(expected);
  });
});
