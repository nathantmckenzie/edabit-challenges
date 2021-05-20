//https://edabit.com/challenge/AoZkgsYvGxx2gsFCP
//expert
//unsolved but close

function maxMin(n) {
  //-------------MAXIE-------------------
  let arr = [];
  let split = n
    .toString()
    .split("")
    .map((string) => Number(string));
  let i = 0;
  let j = i + 1;
  let index = 0;
  while (i < split.length) {
    j = i + 1;
    let max = 0;
    while (j <= split.length) {
      if (split[j] > max) {
        max = split[j];
        index = j;
      }
      j++;
    }
    //console.log(split[i], max);
    if (split[i] < max) {
      let temp = split[i];
      split[i] = split[index];
      split[index] = temp;
      arr.push(Number(split.join("")));
      break;
    }
    i++;
  }
  if (arr.length === 0) arr.push(Number(split.join("")));
  //------------MINNIE-----------------------------
  split = n
    .toString()
    .split("")
    .map((string) => Number(string));
  i = 0;
  j = i + 1;
  index = 0;
  while (i < split.length) {
    j = i + 1;
    let min = Infinity;
    while (j <= split.length) {
      if (split[j] < min) {
        min = split[j];
        index = j;
      }
      j++;
    }
    //console.log(split[i], max);
    if (split[i] > min) {
      if (i === 0 && min === 0) {
        i++;
      } else {
        let temp = split[i];
        split[i] = split[index];
        split[index] = temp;
        console.log(split);
        arr.push(Number(split.join("")));
        break;
      }
    }
  }
  if (arr.length === 0) arr.push(Number(split.join("")));
  return arr;
}

console.log(maxMin(12340));
console.log(maxMin(98761));
//console.log(maxMin(9000));
console.log(maxMin(11321));
