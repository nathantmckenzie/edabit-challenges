//https://edabit.com/challenge/XiHt35Amfnci2pLgr
//very hard
//solved

function ingExtractor(string) {
  let arr = [];
  let vowels = /["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]/;
  let split = string
    .split(" ")
    .filter((word) => word !== "ing")
    .filter((word) => word !== "string");
  for (let i = 0; i < split.length; i++) {
    let indexOf = split[i].indexOf("ing");
    if (split[i].includes("ing") && vowels.test(split[i][indexOf - 1])) {
      arr.push(split[i]);
    } else if (
      (split[i].includes("ing") && split[i].length > 5) ||
      (split[i].includes("ING") && split[i].length > 5)
    ) {
      arr.push(split[i]);
    }
  }
  return arr;
}
console.log(ingExtractor("Taking taLkING pending SING"));
