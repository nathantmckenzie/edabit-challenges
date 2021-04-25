//https://edabit.com/challenge/RaxaX4wmKKCsrzKwJ
//very hard
//solved!

function divide(arr, n) {
  let newArr = [];
  let i = 0;
  let j = 1;
  newArr.push([arr[0]]);
  while (j < arr.length) {
    if (newArr[i].reduce((acc, cur) => acc + cur) + arr[j] <= n) {
      newArr[i].push(arr[j]);
      j++;
    } else {
      i++;
      newArr.push([]);
      newArr[i].push(arr[j]);
      j++;
    }
  }
  return newArr;
}

console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));
