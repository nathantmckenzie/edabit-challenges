//https://edabit.com/challenge/xPBFGvKQfRFEyy4vx
//expert
//unsolved

function validName(name) {
  let split = name.split(" ");
  let dot = /[.]/;
  let capital = /[A-Z]/;
  if (split.length < 2) return false;
  if (split.length === 2) {
    if (!capital.test(split[0])) {
      return false;
    } else if (!dot.test(split[0])) {
      return false;
    }
  }
  if (split.length === 3) {
    if (split[2].length === 2) return false;
  }

  return true;
}

console.log(validName("Herbet"));
