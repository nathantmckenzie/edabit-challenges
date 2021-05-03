//https://edabit.com/challenge/zujgM52Xr4MogBjgH
//very hard
//solved

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alphabetIndex(alphabet, str) {
  let highestIndex = 0;
  let split = str.toLowerCase().split("");
  for (let i = 0; i < split.length; i++) {
    if (alphabet.indexOf(split[i]) + 1 > highestIndex) {
      highestIndex = alphabet.indexOf(split[i]) + 1;
    }
  }
  return `${highestIndex}${alphabet[highestIndex - 1]}`;
}

console.log(alphabetIndex(alphabet, "Oscar"));
