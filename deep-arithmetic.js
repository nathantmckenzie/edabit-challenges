//https://edabit.com/challenge/E8WcotHKRGfYodchW
//expert
//unsolved

function sum(arr) {
  let splitted = arr
    .flat(Infinity)
    .map((num) => num.split("").filter((x) => !isNaN(x)))
    .filter((val) => val.some((v) => true));
  let final = splitted
    .map((x) => x.reduce((x, y) => x + y))
    .map((x) => Number(x))
    .reduce((x, y) => x + y);
  return final;
}

console.log(
  sum([
    ["1X2", "t3n"],
    ["1024", "5", "64"],
  ])
);
