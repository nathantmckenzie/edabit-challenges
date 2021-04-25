function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    arr.split(0, arr.length / 2);
  }
}

console.log(mergeSort([4, 1, 10, 9]));
