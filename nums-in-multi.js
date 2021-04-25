//https://edabit.com/challenge/6dC7GRf5SsbsNvYdk
//solved

const countNumber = (arr) => {
  return arr.flat(Infinity).filter((x) => typeof x == "number").length;
};

console.log(countNumber([["", 17.2, 5, "edabit"]]));
