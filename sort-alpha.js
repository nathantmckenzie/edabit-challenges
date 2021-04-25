function trueAlphabetic(str) {
  let sorted = str.replace(/\s/g, "").split("").sort();
  let newStr = "";
  let arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === " ") {
      newStr += " " + sorted[i];
    } else {
      newStr += sorted[i];
    }
  }
  return newStr.substring(0, str.length - 1);
}

console.log(trueAlphabetic("hello world"));
