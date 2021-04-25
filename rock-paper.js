//https://edabit.com/challenge/jtvCv6cjHorKpmyFc

function calculateScore(games) {
  let abigail = 0;
  let benson = 0;
  for (let game of games) {
    if (game.includes("R", "S" || "S", "P" || "P", "R")) {
      abigail++;
    } else if (game.includes("S", "R" || "P", "S" || "R", "P")) {
      benson++;
    }
  }
  console.log(abigail, benson);
  if (abigail > benson) {
    return "Abigail";
  } else if (abigail === benson) {
    return "Tie";
  } else if (abigail < benson) {
    return "Benson";
  }
}

console.log(
  calculateScore([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
);
