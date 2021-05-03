//https://edabit.com/challenge/vZ5fXMmqfzXQ5dQBv
//expert
//unsolved

function stringBuilder(s) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const split = s.split("");
  let obj = {};
  for (let i = 0; i < split.length; i++) {
    if (numbers.includes(split[i])) {
      obj[Number(split[i])] = split;
    }
  }
}

console.log(stringBuilder("3[a]2[bc]"));
