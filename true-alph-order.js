//https://edabit.com/challenge/8NDcdD8QZiMKJJaYL
//hard
//solved

function trueAlphabetic(str) {
  let split = str.split("");
  let sorted = (str = str.replace(/\s/g, "").split("")).sort();
  let sentence = "";
  for (let i = 0; i < split.length; i++) {
    if (split[i] === " ") sentence += " ";
    else sentence += sorted.shift();
  }
  return sentence;
}

console.log(trueAlphabetic("hello world"));
console.log(trueAlphabetic("edabit is awesome"));
console.log(trueAlphabetic("have a nice day"));
