//https://edabit.com/challenge/5S5HBQW6zZp8eH3eL
//unsolved

function uncensor(str, vowels) {
  let newStr = "";
  let arr = vowels.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") newStr += arr[i];
  }
  return newStr;
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
