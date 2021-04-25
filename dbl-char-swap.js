//https://edabit.com/challenge/NfBqxaDu4KoxAysWF

function doubleSwap(str, c1, c2) {
  let newStr = "";
  for (let char of str) {
    if (char === c1) {
      newStr += c2;
    } else if (char === c2) {
      newStr += c1;
    } else {
      newStr += char;
    }
  }
  return newStr;
}

console.log(doubleSwap("128 895 556 788 999", "8", "9"));
