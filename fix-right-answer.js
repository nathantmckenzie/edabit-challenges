//https://edabit.com/challenge/h7c3CTDzWge6SAzKT
//very hard
//solved! basically by myself (just the matching I wasn't sure how to do)

function postfix(expr) {
  let n = expr.match(/\d+/g);
  let s = expr.match(/[/+*-]/g);
  return n.reduce((accum, value) => {
    if (s[0] === "/") {
      accum = Number(accum) / Number(value);
      s.shift();
    } else if (s[0] === "*") {
      accum = Number(accum) * Number(value);
      s.shift();
    } else if (s[0] === "+") {
      accum = Number(accum) + Number(value);
      s.shift();
    } else if (s[0] === "-") {
      accum = Number(accum) - Number(value);
      s.shift();
    }
    return accum;
  });
}

console.log(postfix("2 2 +"));
console.log(postfix("8 4 / 9 * 3 1 * /"));
