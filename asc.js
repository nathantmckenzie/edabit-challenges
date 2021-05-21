//https://edabit.com/challenge/jN89tuARCFbtQm6vE
//expert
//solved!!

function consecutive(arr) {
  const differenceAry = arr.slice(1).map(function (n, i) {
    return n - arr[i];
  });
  const isDifference = differenceAry.every((value) => value == 1);
  return isDifference;
}

function ascending(str) {
  let nums = str.split("").map((str) => Number(str));
  let halfway = str.length / 2;
  let array = [];
  for (let j = 1; j <= halfway; j++) {
    for (let i = 0; i < nums.length; i += j) {
      array.push(nums.slice(i, i + j));
    }
    let something = array.map((a) =>
      a.reduce((acc, cur) => Number(acc.toString() + cur.toString()))
    );
    array = [];
    if (consecutive(something) === true) {
      return true;
    } else {
      array = [];
    }
  }
  return false;
}

console.log(ascending("232425")); //true
console.log(ascending("13949")); //false
console.log(ascending("444445")); //true
console.log(ascending("35236237238")); //false
console.log(ascending("57585960616263")); //true
