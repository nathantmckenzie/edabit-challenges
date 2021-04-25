function isValidSubsequence(array, sequence) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequence.includes(array[i])) {
      counter++;
    }
  }
  return counter === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [6, 1, -1, 10]));
