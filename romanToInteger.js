//https://leetcode.com/problems/roman-to-integer/
//easy
//solved but with help

var romanToInt = function (s) {
  const symbolToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInt = symbolToValue[s.charAt(i)];
    let nextInt = symbolToValue[s.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      total += currentInt;
    }
  }
  return total;
};

console.log(romanToInt("LVIII"));
