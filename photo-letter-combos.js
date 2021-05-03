//edabit.com/challenge/npLurjMJofmFRCJwx
https: expert;
unsolved;

function letterCombinations(digits) {
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let arr = [];
  let combinations = digits
    .split("")
    .reduce((acc, cur) => acc * obj[cur].length);
}

console.log(letterCombinations("23"));
