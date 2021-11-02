//expert
//unsolved
//https://edabit.com/challenge/vHJrWvyEiiGp5yZtX

const longestNonrepeatingSubstring = (string) => {
  let longestString = "";
  let lengths = [];
  let counter = 0;
  let arr = [];
  let split = string.split("");
  for (let i = 0; i < split.length; i++) {
    if (arr.includes(split[i])) {
      if (counter > Math.max(...lengths)) {
        console.log(i);
        lengths.push(counter);
        longestString = arr.join("");
        counter = 0;
        arr = [split[i]];
      } else {
        counter = 0;
        arr = [];
      }
    } else {
      arr.push(split[i]);
      counter++;
    }
  }
  return longestString;
};

//console.log(longestNonrepeatingSubstring("kjlmjjiiiidfiwii"));
console.log(longestNonrepeatingSubstring("kjlmjjiiiidfewii"));
// console.log(longestNonrepeatingSubstring("abcabcbb"));
// console.log(longestNonrepeatingSubstring("aaaaaa"));
// console.log(longestNonrepeatingSubstring("abcde"));
// console.log(longestNonrepeatingSubstring("abcda"));
// console.log(longestNonrepeatingSubstring("abcde"));
// console.log(longestNonrepeatingSubstring("abcda"));
// console.log(longestNonrepeatingSubstring("aaccddeeffb"));
// console.log(longestNonrepeatingSubstring("abdde"));
// console.log(longestNonrepeatingSubstring("ccdddcccc"));
// console.log(longestNonrepeatingSubstring("cdxdxccxc"));
// console.log(longestNonrepeatingSubstring("abddefgh"));
// console.log(longestNonrepeatingSubstring("abcdabcd"));
// console.log(longestNonrepeatingSubstring("abddebcc"));
// console.log(longestNonrepeatingSubstring("xyxxyzyzy"));
// console.log(longestNonrepeatingSubstring("kjlmjsdeee"));
// console.log(longestNonrepeatingSubstring("kjlmjsdfew"));
// console.log(longestNonrepeatingSubstring("kjlmjsdfewii"));
