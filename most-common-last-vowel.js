//https://edabit.com/challenge/ewhZdFfjk6bNy9LtC
//very hard
//solved

function frequent(number) {
  var count = 0;
  var sortedNumber = number.sort();
  var start = number[0],
    item;
  for (var i = 0; i < sortedNumber.length; i++) {
    if (start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i + 1]) {
      item = sortedNumber[i];
    }
  }
  return item;
}

function commonLastVowel(str) {
  const vowels = ["a", "i", "o", "e", "u"];
  const lastVowels = str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .filter((letter) => vowels.includes(letter))
        .pop()
    );
  return frequent(lastVowels);
}

console.log(commonLastVowel("Hello World!"));
console.log(commonLastVowel("OOI UUI EEI AAI"));
console.log(commonLastVowel("Watch the characters dance!"));
