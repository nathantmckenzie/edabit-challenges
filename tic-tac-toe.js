//https://edabit.com/challenge/jsukwFKLKJx2qLs5b
//very hard
//solved!

function ticTacToe(board) {
  let rotated = board[0].map((val, index) =>
    board.map((row) => row[index]).reverse()
  );
  if (
    board.map((row) => row.every((element) => element === "X")).includes(true)
  ) {
    return "X";
  } else if (
    board.map((row) => row.every((element) => element === "O")).includes(true)
  ) {
    return "O";
  } else if (
    rotated.map((row) => row.every((element) => element === "O")).includes(true)
  ) {
    return "O";
  } else if (
    rotated.map((row) => row.every((element) => element === "X")).includes(true)
  ) {
    return "X";
  } else {
    let answer = [];
    for (let i = 0; i < board.length; i++) {
      answer.push(board[i][i]);
      console.log(answer);
      if (answer.length === 3 && answer.every((element) => element === "X")) {
        return "X";
      } else if (
        answer.length === 3 &&
        answer.every((element) => element === "O")
      ) {
        return "O";
      } else if (answer.length === 3) {
        return "Draw";
      }
    }
  }
}

console.log(
  ticTacToe([
    ["O", "X", "X"],
    ["X", "O", "O"],
    ["X", "O", "O"],
  ])
);
