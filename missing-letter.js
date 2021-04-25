//https://edabit.com/challenge/t6HFLEYD2e7ePxAu5
//hard
//solved

function missingLetter(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(str[i].charCodeAt());
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i + 1] - newArr[i] !== 1 && i + 1 < newArr.length) {
      return String.fromCharCode(newArr[i] + 1);
    }
  }
  return "No Missing Letter";
}

console.log(missingLetter("abdefg"));
