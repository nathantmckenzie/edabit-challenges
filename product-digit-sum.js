// https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk

function sumDigProd(...num) {
  let number = [num[0] + num[1]];
  if (number.length > 1) {
    let value1 = number.slice(0, 1);
    let value2 = number.slice(1);
    console.log(value1, value2);
    //number.reduce((x, y) => x * y);
  }
  //else {
  //  return parseInt(number);
  //}
}

console.log(sumDigProd(34, 3));
