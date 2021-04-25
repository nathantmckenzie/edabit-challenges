var firstUniqChar = function (s) {
  let split = s.split("");
  let unique = [...new Set(s)];
  let obj = {};
  let counter;
  for (let i = 0; i < unique.length; i++) {
    counter = 0;
    if (s.includes(unique[i])) {
      counter++;
    }
    obj[unique[i]] = counter;
  }
  return obj;
};

console.log(firstUniqChar("leetcode"));
