//https://edabit.com/challenge/eCPim4XcssdZdvs32

function numInStr(arr) {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];
  for (let str of arr) {
    if (str.includes(num)) newArr.push(str);
  }
  return newArr;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
