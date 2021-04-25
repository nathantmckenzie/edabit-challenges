//https://edabit.com/challenge/PEecJK7uPz5m2oD9i
//very hard

// function oddOneOut(arr) {
//   let oddOne = arr.sort((a, b) => a.length - b.length).pop();
//   if (arr.every((element) => element.length === oddOne.length)) {
//     return false;
//   } else {
//     return true;
//   }
// }

function oddOneOut(arr) {
  let uniqueWord = "";
  for (let word of arr) {
    if (word.length !== arr[0].length) {
      return word;
    }
  }
}

console.log(oddOneOut(["sil", "mom", "let", "the"]));
