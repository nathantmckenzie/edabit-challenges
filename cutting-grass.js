//https://edabit.com/challenge/L99jAtiuAeWaB9jdm
//very hard
//solved

function cuttingGrass(arr, ...cuts) {
  let array = [];
  let what = [];
  let j = 0;
  for (let i = 0; i < cuts.length; i++) {
    while (j < arr.length) {
      what.push((arr[j] -= cuts[i]));
      j++;
    }
    j = 0;
    if (what.some((value) => value <= 0)) {
      array.push("Done");
    } else {
      array.push(what);
    }
    what = [];
  }
  return array;
}

console.log(cuttingGrass([3, 4, 4, 4], 1, 1, 1, 1));
console.log(cuttingGrass([8, 9, 9, 8, 8], 2, 3, 2, 1));
console.log(cuttingGrass([1, 0, 1, 1], 1, 1, 1));
console.log(cuttingGrass([4, 5, 4, 5], 2, 1, 1));
