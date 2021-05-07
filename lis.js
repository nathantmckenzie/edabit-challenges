//https://leetcode.com/problems/longest-increasing-subsequence/
//medium
//unsolved

// var lengthOfLIS = function (sequence) {
//   const lengthsArray = Array(sequence.length).fill(1);

//   let previousElementIndex = 0;
//   let currentElementIndex = 1;

//   while (currentElementIndex < sequence.length) {
//     if (sequence[previousElementIndex] < sequence[currentElementIndex]) {
//       // If current element is bigger then the previous one then
//       // current element is a part of increasing subsequence which
//       // length is by one bigger then the length of increasing subsequence
//       // for previous element.
//       const newLength = lengthsArray[previousElementIndex] + 1;
//       if (newLength > lengthsArray[currentElementIndex]) {
//         // Increase only if previous element would give us bigger subsequence length
//         // then we already have for current element.
//         lengthsArray[currentElementIndex] = newLength;
//       }
//     }

//     // Move previous element index right.
//     previousElementIndex += 1;

//     // If previous element index equals to current element index then
//     // shift current element right and reset previous element index to zero.
//     if (previousElementIndex === currentElementIndex) {
//       currentElementIndex += 1;
//       previousElementIndex = 0;
//     }
//   }
//   // Find the biggest element in lengthsArray.
//   // This number is the biggest length of increasing subsequence.
//   let longestIncreasingLength = 0;

//   for (let i = 0; i < lengthsArray.length; i += 1) {
//     if (lengthsArray[i] > longestIncreasingLength) {
//       longestIncreasingLength = lengthsArray[i];
//     }
//   }

//   return longestIncreasingLength;
// };
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

function lis(arr) {
  let lengthsArray = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        lengthsArray[i] = Math.max(lengthsArray[i], lengthsArray[j] + 1);
      }
    }
  }
  return Math.max(...lengthsArray);
}

console.log(lis([10, 9, 2, 5, 3, 7, 101, 18]));
