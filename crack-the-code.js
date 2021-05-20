//https://edabit.com/challenge/NNqAzPWi5v4HfTC9k
//very hard
//unsolved

function decode(str) {
  return str.split("").map((letter, index) => str.charCodeAt(index));
}

console.log(decode("hello"));
console.log(decode("wonderful"));
