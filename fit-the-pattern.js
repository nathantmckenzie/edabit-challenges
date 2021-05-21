//https://edabit.com/challenge/oXWwHkutPD5Aer6Db
//expert
//solved!

function checkPattern(arr, pattern) {
  const obj = {};
  let split = pattern.split("");
  for (let i = 0; i < arr.length; i++) {
    if (!obj[split[i]]) {
      for (let j = 0; j < i; j++) {
        if (JSON.stringify(obj[split[j]]) === JSON.stringify(arr[i])) {
          return false;
        }
      }
      obj[split[i]] = arr[i];
    } else if (JSON.stringify(obj[split[i]]) !== JSON.stringify(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(
  checkPattern(
    [
      [1, 1],
      [2, 2],
      [1, 1],
      [2, 2],
    ],
    "ABAB"
  )
);

console.log(
  checkPattern(
    [
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    "AABA"
  )
);
