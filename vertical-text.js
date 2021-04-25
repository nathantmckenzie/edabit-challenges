//https://edabit.com/challenge/aBMEMcMoWbbSRjFWS
//very hard
//solved!!

function verticalText(str) {
  let split = str.split(" ").map((x) => x.toString().split(""));
  let indexOfLongestWord = split
    .map((a) => a.length)
    .indexOf(Math.max(...split.map((a) => a.length)));
  return split[indexOfLongestWord]
    .map((val, index) => split.map((row) => row[index]))
    .map((x) => x.map((y) => (y === undefined ? " " : y)));
}

console.log(verticalText("Holy bananas"));
console.log(verticalText("Skill the baboon king"));
