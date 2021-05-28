//https://edabit.com/challenge/Q7foiyejfJG6pqqws
//expert
//unsolved

function bucketize(phrase, n) {
  let wordLength = 0;
  let split = phrase.split(" ");
  let subPhrase = "";
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length + wordLength <= n) {
      console.log(subPhrase);
      subPhrase += split[i];
      wordLength += split[i].length;
    } else {
      arr.push(subPhrase);
      subPhrase = "";
      wordLength = 0;
    }
  }
  return arr;
}

console.log(bucketize("she sells sea shells by the sea", 10));
