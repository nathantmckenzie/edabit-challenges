//solved

var isPalindrome = function (x) {
  let palindrome = parseInt(x.toString().split("").reverse().join(""));
  return x === palindrome;
};

console.log(isPalindrome(-121));
