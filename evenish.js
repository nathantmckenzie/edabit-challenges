function oddishOrEvenish(num) {
  return num
    .toString()
    .split("")
    .map((char) => parseInt(char))
    .reduce((accum, curr) => accum + curr);
}

console.log(oddishOrEvenish(694));
