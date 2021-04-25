//https://edabit.com/challenge/uGN6vd3t2ycfnCpfv
//very hard
//solved!

function split(str) {
  let braces = {
    "(": ")",
  };
  let stack = [];
  let arr = [];
  let string = "";
  for (let brace of str) {
    string += brace;
    if (braces[brace]) {
      stack.push(braces[brace]);
    } else if (stack.pop() !== brace) {
      return false;
    }
    if (!stack.length) {
      arr.push(string);
      string = "";
    }
  }
  return arr;
}

console.log(split("((())())(()(()()))"));
