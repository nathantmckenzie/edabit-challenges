//https://edabit.com/challenge/zptHytXMgKcAjr4TH

function direction(arr) {
  let eastToWest = {
    e: "w",
    a: "e",
    s: "s",
    t: "t",
    E: "W",
    A: "E",
    S: "S",
    T: "T",
    " ": " ",
  };
  let newArr = arr.join(" ").split("");
  let final = newArr.map((letter) => eastToWest[letter]).join("");
  return final;
}

console.log(direction(["east", "EAST", "eastEAST"]));
