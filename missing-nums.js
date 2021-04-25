//https://edabit.com/challenge/8a2J9T4FM5fgSwn4w
//hard
//solved

function sumMissingNumbers(arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  let total = arr.reduce((x, y) => x + y);
  return sum - total;
}

console.log(sumMissingNumbers([1, 3, 5, 7, 10]));
