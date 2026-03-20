
export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  const result: number[] = [];

  let i = collection1.length - 1;
  let j = 0;
  let k = 0;

  while (i >= 0 || j < collection2.length || k < collection3.length) {
    const val1 = i >= 0 ? collection1[i] : Infinity;
    const val2 = j < collection2.length ? collection2[j] : Infinity;
    const val3 = k < collection3.length ? collection3[k] : Infinity;

    const smallest = Math.min(val1, val2, val3);

    if (smallest === Infinity) {
      break;
    }

    // Count how many collections have the smallest value and push once for each
    if (i >= 0 && collection1[i] === smallest) {
      result.push(smallest);
      i--;
    }
    if (j < collection2.length && collection2[j] === smallest) {
      result.push(smallest);
      j++;
    }
    if (k < collection3.length && collection3[k] === smallest) {
      result.push(smallest);
      k++;
    }
  }

  return result;
}
