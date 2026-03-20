import { describe, it, expect } from 'vitest';
import { merge } from './index';

describe('merge function', () => {
  it('should merge three sorted collections in ascending order', () => {
    const collection1 = [9, 5, 2];
    const collection2 = [1, 4, 6];
    const collection3 = [3, 7, 8];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle empty collections', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([]);
  });

  it('should handle when one collection is empty', () => {
    const collection1 = [5, 3, 1];
    const collection2: number[] = [];
    const collection3 = [2, 4];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle duplicate values across collections', () => {
    const collection1 = [6, 4, 2];
    const collection2 = [1, 3, 5];
    const collection3 = [2, 4, 6];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });

  it('should handle single element collections', () => {
    const collection1 = [3];
    const collection2 = [1];
    const collection3 = [2];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle collections starting from 0', () => {
    const collection1 = [10, 5, 0];
    const collection2 = [0, 3, 6];
    const collection3 = [1, 2, 4];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([0, 0, 1, 2, 3, 4, 5, 6, 10]);
  });

  it('should handle when collection_1 has smaller size than others', () => {
    // collection_1: max to min (descending) - only 2 elements
    const collection1 = [5, 1];
    // collection_2: min to max - 5 elements
    const collection2 = [2, 4, 6, 8, 10];
    // collection_3: min to max - 4 elements
    const collection3 = [3, 7, 9, 11];

    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});
