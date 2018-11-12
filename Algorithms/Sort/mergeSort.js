const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // console.log(left, right);
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const assert = require('assert');

assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mergeSort([10, 5, 3, 8, 1, 6, 4, 9, 2, 7]));
assert.deepEqual([], mergeSort([]));
assert.deepEqual([1], mergeSort([1]));
assert.deepEqual([1, 2], mergeSort([1, 2]));
assert.deepEqual([1, 2], mergeSort([2, 1]));
console.log('All tests pass.');
