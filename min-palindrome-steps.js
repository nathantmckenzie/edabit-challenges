//https://edabit.com/challenge/zadc59oCm9Hj5xnrh
//expert
//solved

function minPalindromeSteps(str) {
  if (str === str.split("").reverse().join("")) return 0;
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    counter++;
    let string = str + str.substring(0, i).split("").reverse().join("");
    if (string === string.split("").reverse().join("")) {
      return counter - 1;
    }
  }
  return false;
}

console.log(minPalindromeSteps("race"));
console.log(minPalindromeSteps("mada"));
console.log(minPalindromeSteps("mirror"));
