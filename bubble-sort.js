function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        console.log(arr);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 10, 3, 2, 5, 3, 1, 10, 100, 13, 242]));
