//https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

function isPositiveDominant(a) {
  let pos = 0;
  let neg = 0;
  let uniqueArr = [...new Set(a)];
  for (let num of uniqueArr) {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    }
  }
  return pos > neg;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
