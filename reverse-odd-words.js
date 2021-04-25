//https://edabit.com/challenge/yYfQoo6rkMezauG77

function reverseOdd(str) {
  let newStr = "";
  let arr = str.split(" ");
  for (let word of arr) {
    if (word.length % 2 !== 0) {
      newStr += word.split("").reverse().join("") + " ";
    } else {
      newStr += word + " ";
    }
  }
  return newStr.slice(0, -1);
}

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
