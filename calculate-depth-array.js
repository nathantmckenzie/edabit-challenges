//https://edabit.com/challenge/JJtafXGmNegpQMp6p
//very hard
//solved

function depth(arr) {
  let flat = arr.flat(Infinity);
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== flat[i]) {
      arr = arr.flat();
      j++;
      if (arr[i] !== flat[i]) {
        arr = arr.flat();
        j++;
      }
    }
  }
  return j;
}

console.log(depth([1, [2, [3, 4]]]));
console.log(depth([1, [2, [3, [4]]]]));
