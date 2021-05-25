//https://edabit.com/challenge/b9FBAhxaijR9fzxgo
//expert
//solved

function distanceToNearestVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) arr.push(i);
  }
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      newArr.push(0);
    } else {
      let min = Infinity;
      let distance;
      for (let j = 0; j < arr.length; j++) {
        distance = Math.abs(i - arr[j]);
        if (distance < min) min = distance;
      }
      newArr.push(min);
    }
  }
  return newArr;
}

// console.log(distanceToNearestVowel("aaaaa"));
// console.log(distanceToNearestVowel("babbb"));
console.log(distanceToNearestVowel("abcdabcd"));
// console.log(distanceToNearestVowel("shopper"));
