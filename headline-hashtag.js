//https://edabit.com/challenge/ABiF6EsqRYMvogcgp
//very hard
//solved

function getHashTags(str) {
  let split = str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .splice(0, 3);
  let alpha = /^[a-z]+$/;
  for (let [i, word] of split.entries()) {
    if (/[^a-zA-Z]/.test(word)) {
      word = word.substring(0, word.length - 1);
    }
    split[i] = `#${word.toLowerCase()}`;
  }
  return split;
}

console.log(
  getHashTags("How the Avocado? Became the Fruit of the Global Trade")
);
