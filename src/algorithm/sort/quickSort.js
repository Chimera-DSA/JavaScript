/**
 * 快速排序
 * @param {Array} arr 待排序数组
 * @returns {Array} 返回排序后的数组
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);
  return [...leftSorted, pivot, ...rightSorted];
}

export { quickSort as default };
