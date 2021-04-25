//https://edabit.com/challenge/MXbibjS95Y8X4wDZx
//very hard
//solved

function hasIdentical(matrix) {
  const inverted = matrix[0].map((val, index) =>
    matrix.map((row) => row[index])
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < inverted.length; j++) {
      if (matrix[i].join() === inverted[j].join()) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  hasIdentical([
    [4, 4, 9, 4],
    [2, 1, 9, 8],
    [5, 4, 7, 7],
    [6, 4, 1, 0],
  ])
);
