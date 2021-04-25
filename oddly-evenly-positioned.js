//https://edabit.com/challenge/fWkrdJb6EJrHsP7Sm
//hard
//solved

function charAtPos(r, s) {
  if (typeof r === "object") {
    if (s === "even") {
      return r.filter((number, index) => index % 2 !== 0);
    } else if (s === "odd") {
      return r.filter((number, index) => index % 2 === 0);
    }
  } else if (typeof r === "string") {
    if (s === "even") {
      return r
        .split("")
        .filter((letter, index) => index % 2 !== 0)
        .join("");
    } else if (s === "odd") {
      return r
        .split("")
        .filter((letter, index) => index % 2 === 0)
        .join("");
    }
  }
}

console.log(charAtPos([2, 4, 6, 8, 10], "even"));
