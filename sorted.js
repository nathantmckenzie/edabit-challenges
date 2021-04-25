//https://edabit.com/challenge/257hD8dzvsyR4G839

function sumMissingNumbers(arr) {
  let missingArr = [];
  let sorted = arr.sort();
  console.log(sorted);
  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] - sorted[i - 1] > 1) {
      sorted.push(sorted[i - 1] + 1);
      sorted.sort();
      console.log(sorted);
      missingArr.push(sorted[i - 1] + 1);
    } else if (sorted[i + 1] - sorted[i] < -1) {
      sorted.push(sorted[i + 1] - 1);
      sorted.sort();
      console.log(sorted);
      missingArr.push(sorted[i + 1] - 1);
    }
  }
  if (missingArr.length === 0) return 0;
  return missingArr.reduce((x, y) => x + y);
}

console.log(sumMissingNumbers([1, 4, 3, 2, 6, 8]));
