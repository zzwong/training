const mergeSort = array => {
  if (array.length === 1) {
    console.log('hi', array);
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log(left, right);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  console.log(left, right);
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
  console.log('result:', result, left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([10, 5, 3, 8, 1, 6, 4, 9, 2, 7]));
