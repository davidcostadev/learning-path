export function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }
  let pivo = array[0];

  let left = [];
  let right = [];

  for (let i = 0 + 1; i < array.length; i++) {
    let current = array[i];
    if (current < pivo) {
      left.push(current);
    } else {
      right.push(current);
    }
  }

  return [...quickSort(left), pivo, ...quickSort(right)];
}
