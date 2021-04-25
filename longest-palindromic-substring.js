//https://leetcode.com/problems/longest-palindromic-substring/
//medium
//unsolved

function longestPalindrome(string) {
  if (string.length < 1 || string === null) return "";

  let longest = "";

  for (let i = 0; i < string.length; i++) {
    let oddPalindrome = expandFromCenter(string, i, i);
    let evenPalindrome = expandFromCenter(string, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
}

function expandFromCenter(string, left, right) {
  let i = 0;
  while (string[left - i] && string[left - i] === string[right + i]) {
    i++;
  }
  i--;

  return string.slice(left - i, right + i + 1);
}
console.log(longestPalindrome("babad"));
