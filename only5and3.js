//https://edabit.com/challenge/2aRggQCd8XFHtdtBD
//VERY HARD

function only5and3(n) {
  let counter = 0;
  while (counter !== n) {
    counter += 5;
    counter *= 3;
  }
  return counter;
}

console.log(only5and3(25));
