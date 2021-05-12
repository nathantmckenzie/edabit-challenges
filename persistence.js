//https://edabit.com/challenge/vHvu4Wis8RhmQbwXm
//very hard
//solved!

function additivePersistence(n) {
  let number = n.toString();
  let iterations = 0;
  while (number.length > 1) {
    iterations++;
    number = number
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur))
      .toString();
  }
  return iterations;
}

console.log(additivePersistence(1679583));

function multiplicativePersistence(n) {
  let number = n.toString();
  let iterations = 0;
  while (number.length > 1) {
    iterations++;
    number = number
      .split("")
      .reduce((acc, cur) => Number(acc) * Number(cur))
      .toString();
  }
  return iterations;
}

console.log(multiplicativePersistence(277777788888899));
