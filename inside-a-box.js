//https://edabit.com/challenge/9Wvy5ogsYeXjyzMxo
//very hard
//solved for some of them but causing timeout for others

function count(arr) {
  const stack = [];
  const storage = [];
  let j = 0;
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    j = 0;
    while (j < arr[i].length) {
      console.log(arr[i].charAt(j));
      if (arr[i].charAt(j) === "#") {
        j++;
        while (arr[i].charAt(j) !== "#") {
          console.log(arr[i].charAt(j));
          if (arr[i].charAt(j) !== " ") {
            storage.push(arr[i].charAt(j));
          }
          j++;
        }
      }
      j++;
    }
    i++;
  }
  return [...new Set(storage)].length;
}

// console.log(count(["AAAAAAA", "AAA###A", "AAA#!#A", "AAA###A", "AAAAAAA"]));
//console.log(
//  count(["#AAAAAABC", "AAA#####C", "ZAA#!%@#C", "AAA#####C", "#AAAAAABC"])
//);

// function test(str) {
//   let arr = [];
//   let i = 0;
//   while (i < str.length) {
//     if (str.charAt(i) === "#") {
//       i++;
//       while (str.charAt(i) !== "#") {
//         console.log(str.charAt(i));
//         arr.push(str.charAt(i));
//         i++;
//       }
//     }
//     i++;
//   }
//   return arr;
// }
// console.log(test("$&#*^(@#^!"));
