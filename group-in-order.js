//https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv
//very hard
//solved (not my solution)

function group(arr, size) {
  const sortedArr = arr.sort((left, right) => left - right);
  const arraysCount = Math.ceil(arr.length / size);
  const resultArr = [];

  for (let i = 0; i < arraysCount; i++) {
    resultArr[i] = [];
  }

  for (let i = 0; i < sortedArr.length; i += arraysCount) {
    for (let j = 0; j < arraysCount; j++) {
      value = sortedArr[i + j];
      if (value) resultArr[j].push(value);
    }
  }

  return resultArr;
}

console.log(group([1, 2, 3, 4, 5, 6], 3)); //solved
console.log(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4));
