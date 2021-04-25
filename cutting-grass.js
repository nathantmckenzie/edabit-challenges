//https://edabit.com/challenge/L99jAtiuAeWaB9jdm
//very hard
//unsolved

function cuttingGrass(arr, ...cuts) {
  for (let i = 0; i < cuts.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) return "done";
      arr[j] -= cuts[i];
    }
  }
  return arr;
}

console.log(cuttingGrass([3, 4, 4, 4], 1, 1, 1));
