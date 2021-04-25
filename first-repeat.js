//https://edabit.com/challenge/aMyRSjKakeDauFfkX
//SOLVED

function firstRepeat(str) {
  let obj = {};
  let split = str.split("");
  for (let i = 0; i < split.length; i++) {
    obj[split[i]] = 0;
  }
  for (let i = 0; i < split.length; i++) {
    obj[split[i]] += 1;
    if (obj[split[i]] > 1) {
      return split[i];
    }
  }
  return obj;
}

console.log(firstRepeat("legolas"));
