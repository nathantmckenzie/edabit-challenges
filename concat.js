//https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz

function canConcatenate(arr, target) {
  let newArr = arr.flat();
  let counter = 0;
  for (let num of newArr) {
    if (target.includes(num)) {
      counter++;
    }
  }
  return counter === target.length;
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
