//https://edabit.com/challenge/p7gLw52gxdKENTkcP
//expert
//solved

function maximumSeating(arr) {
  let newPeople = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[0] !== 1 && arr[1] !== 1 && arr[2] !== 1) {
        arr[0] = 1;
        newPeople++;
      }
    } else if (i === arr.length - 1) {
      if (arr[i] !== 1 && arr[i - 1] !== 1 && arr[i - 2] !== 1) {
        arr[i] = 1;
        newPeople++;
      }
    } else {
      if (
        arr[i] !== 1 &&
        arr[i - 1] !== 1 &&
        arr[i - 2] !== 1 &&
        arr[i + 1] !== 1 &&
        arr[i + 2] !== 1
      ) {
        arr[i] = 1;
        newPeople++;
      }
    }
  }
  return newPeople;
}

console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]));
console.log(maximumSeating([0, 0, 0, 0]));
console.log(maximumSeating([1, 0, 0, 0, 0, 1]));
