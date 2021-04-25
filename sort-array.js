//https://edabit.com/challenge/38Ctuc4jKhExdE6uQ

function sortArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
      newArr.push(arr[i], arr[i + 1]);
    }
  }
  return arr;
}

console.log(sortArray([2, -5, 1, 4, 7, 8]));
