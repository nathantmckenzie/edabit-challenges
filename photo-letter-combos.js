//edabit.com/challenge/npLurjMJofmFRCJwx
//expert
//unsolved

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
  let split = digits.split("").map(Number);
  for (let i = 0; i < obj[split[0]].length; i++) {
    for (let k = 0; k < obj[split[1]].length; k++) {
      if (split.length > 2) {
        for (let j = 0; j < obj[split[2]].length; j++) {
          arr.push(obj[split[0]][i] + obj[split[1]][k] + obj[split[2]][j]);
        }
      } else {
        arr.push(obj[split[0]][i] + obj[split[1]][k]);
      }
    }
  }
  return arr;
}

console.log(letterCombinations("543"));

// const letterCombinations = (str) => {
//   const arr = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//   ];
//   const split = str.split("");
//   let storage = [];
//   for (let i = 0; i < arr[0].length; i++) {
//     for (let k = 0; k < arr[1].length; k++) {
//       storage.push(arr[0][i] + arr[1][k]);
//     }
//   }
//   return storage;
// };
