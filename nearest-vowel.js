//https://edabit.com/challenge/62BAcgsNSdwYmE9ty
//very hard
//solved

function nearestVowel(s) {
  let vowels = {
    a: [97, 98, 99],
    e: [100, 101, 102, 103],
    i: [104, 105, 106, 107, 108],
    o: [109, 110, 111, 112, 113, 114],
    u: [115, 116, 117, 118, 119, 120, 121, 122],
  };
  for (let vowel in vowels) {
    if (vowels[vowel].includes(s.charCodeAt())) {
      return vowel;
    }
  }
}
console.log(nearestVowel("b"));
