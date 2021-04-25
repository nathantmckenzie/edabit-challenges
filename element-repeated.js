//https://edabit.com/challenge/XWXprtaTWYCWBGAax
//expert
//solved

function countRepetitions(arr) {
  const obj = {};
  const unique = [...new Set(arr)];
  for (let item of unique) {
    obj[item] = 0;
  }
  for (let item of arr) {
    obj[item] += 1;
  }
  const values = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  return values;
}

console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]));
