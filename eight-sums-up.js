//https://edabit.com/challenge/ZkWSacTDQ65A3gh6j
//expert
//this is the solution but not my solution

function sumsUp(arr) {
  let storage = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 8 && i !== j && i > j) {
        storage.push([arr[i], arr[j]].sort((a, b) => a - b));
      }
    }
  }
  return { storage };
}

console.log(sumsUp([1, 2, 3, 4, 5]));
console.log(sumsUp([1, 2, 3, 7, 9]));
console.log(sumsUp([10, 9, 7, 2, 8]));
console.log(sumsUp([1, 6, 5, 4, 8, 2, 3, 7]));
