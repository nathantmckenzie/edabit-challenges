//https://edabit.com/challenge/HDpN8a7SunaAY94NX
//very hard
//unsolved

function switchGravityOn(matrix) {
  let inverted = matrix[0].map((val, index) =>
    matrix
      .map((row) => row[index])
      .reverse()
      .reverse()
  );
  let array = [];
  let numbers = inverted.map(
    (array) => array.filter((el) => el === "#").length
  );
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      array.push(["-", "-", "-", "-"]);
    } else if (numbers[i] === 1) {
      array.push(["#", "-", "-", "-"]);
    } else if (numbers[i] === 2) {
      array.push(["#", "#", "-", "-"]);
    } else if (numbers[i] === 3) {
      array.push(["#", "#", "#", "-"]);
    } else if (numbers[i] === 4) {
      array.push(["#", "#", "#", "#"]);
    }
  }
  let rotate = array[0].map((val, index) =>
    array
      .map((row) => row[index])
      .reverse()
      .reverse()
  );
  let finalArr = [];
  for (let i = rotate.length; i >= 0; i--) {
    finalArr.push(rotate[i]);
  }
  return finalArr;
}

console.log(switchGravityOn([["#"], ["#"], ["#"], ["#"]]));
