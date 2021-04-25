let arr1 = [
  [2, 2, 3, 6],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12, 15, 18, 45],
];

function wrongNumber(arr) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (arr[i][j] !== arr[i][j])
    }
  }
}

console.log(wrongNumber(arr1));
