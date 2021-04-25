//https://edabit.com/challenge/uScx6aGXmNu27NYWz
//hard
//solved

function getFrequencies(arr) {
  let unique = [...new Set(arr)];
  let newArr = [];
  for (let letter of unique) {
    newArr.push([letter, arr.filter((x) => x === letter).length]);
  }
  return Object.fromEntries(newArr);
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([true, false, true, false, false]));
