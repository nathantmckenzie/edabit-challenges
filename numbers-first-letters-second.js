//https://edabit.com/challenge/wkD5ChYH9ukyNSmZm
//expert
//solved

function numThenChar(arr) {
  let numbers = arr
    .flat()
    .filter((el) => !isNaN(el))
    .sort((a, b) => a - b);
  let letters = arr
    .flat()
    .filter((el) => isNaN(el))
    .sort();
  let combined = numbers.concat(letters);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = combined.shift();
    }
  }
  return arr;
}

console.log(
  numThenChar([
    [1, 2, 4, 3, "a", "b"],
    [6, "c", 5],
    [7, "d"],
    ["f", "e", 8],
  ])
);
console.log(
  numThenChar([
    [1, 2, 4.4, "f", "a", "b"],
    [0],
    [0.5, "d", "X", 3, "s"],
    ["f", "e", 8],
    ["p", "Y", "Z"],
    [12, 18],
  ])
);
