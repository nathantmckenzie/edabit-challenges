//https://edabit.com/challenge/aewSLr2r2LMSDhPxf
//very hard
//solved

function majorityVote(arr) {
  const obj = {};
  for (let [i, item] of arr.entries()) {
    obj[item] = 0;
  }
  let half = arr.length / 2;
  for (let [i, item] of arr.entries()) {
    obj[item] += 1;
    if (obj[item] > half) {
      return item;
    }
  }
  return null;
}

console.log(majorityVote(["A", "A", "A", "B", "C", "A"]));
