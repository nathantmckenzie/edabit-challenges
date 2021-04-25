//https://edabit.com/challenge/hxHBsYebaBM3ff5s6
//very hard
//solved

function findFrequent(arr) {
  let obj = {};
  let unique = [...new Set(arr)];
  for (let i = 0; i < unique.length; i++) {
    obj[unique[i]] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] += 1;
  }
  let values = Object.values(obj);
  let max = Math.max(...values);
  for (let entries in obj) {
    if (obj[entries] === max) {
      if (!isNaN(entries)) {
        return Number(entries);
      } else if (entries === "null") {
        return null;
      } else if (entries === "false") {
        return false;
      } else if (entries === "undefined") {
        return undefined;
      } else {
        return entries;
      }
    }
  }
}

console.log(findFrequent([4, 7, 9, 3, 4]));
