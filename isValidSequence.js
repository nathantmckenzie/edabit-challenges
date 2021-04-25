//https://www.algoexpert.io/questions/Validate%20Subsequence
//easy

function isValidSubsequence(array, subsequence) {
  let arrayIndex = 0;
  let subIndex = 0;
  while (arrayIndex < array.length && subIndex < subsequence.length) {
    if (array[arrayIndex] === subsequence[subIndex]) {
      subIndex++;
    }
    arrayIndex++;
  }
  return subIndex === subsequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 22, -1]));
