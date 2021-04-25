//https://leetcode.com/problems/plus-one/
//easy
//unsovled

var plusOne = function (digits) {
  let total =
    parseInt(digits.reduce((accum, curr) => accum + curr.toString())) + 1;
  let arr = total.toString().split("");
  return arr.map((num) => parseInt(num));
};

console.log(plusOne([0]));
