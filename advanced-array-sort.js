//https://edabit.com/challenge/SAeaT8pzJDkSoACsi
//very hard
//unsolved (this is the right answer though)

function advancedSort(arr) {
  return [...new Set(arr)].map((x) => arr.filter((y) => y === x));
}

console.log(advancedSort([2, 1, 2, 1]));
