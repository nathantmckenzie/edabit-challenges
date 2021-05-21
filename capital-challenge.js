//https://edabit.com/challenge/gjKemfXwedir9y7D4
//very hard
//solved

function selectLetters(s1, s2) {
  let shortestStringLength = Math.min(s1.length, s2.length);
  let newString = "";
  let letters = /[a-zA-Z]/;
  for (let i = 0; i < shortestStringLength; i++) {
    if (
      letters.test(s2.charAt(i)) &&
      s2.charAt(i) === s2.charAt(i).toUpperCase()
    ) {
      newString += s1.charAt(i);
    }
  }
  for (let i = 0; i < shortestStringLength; i++) {
    if (
      letters.test(s1.charAt(i)) &&
      s1.charAt(i) === s1.charAt(i).toUpperCase()
    ) {
      newString += s2.charAt(i);
    }
  }
  return newString;
}

console.log(selectLetters("heLLO", "GUlp"));
console.log(selectLetters("1234567", "XxXxX"));
