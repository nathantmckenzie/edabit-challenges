//https://edabit.com/challenge/7k59Z9bk46uKH9og3
//expert
//solved!!!

function maxSeparator(str) {
  let obj = {};
  let j = 1;
  let i = 0;
  let counter = 2;
  for (let i = 0; i < str.length; i++) {
    obj[str.charAt(i)] = 0;
  }
  let arr = [];
  while (i < str.length - 1) {
    if (str.charAt(i) === str.charAt(j)) {
      if (counter > obj[str.charAt(i)]) {
        obj[str.charAt(i)] = counter;
      }
      i++;
      j = i + 1;
      counter = 2;
    } else if (str.charAt(i) !== str.charAt(j) && j === str.length) {
      i++;
      j = i + 1;
      counter = 2;
    } else if (str.charAt(i) !== str.charAt(j) && j < str.length) {
      j++;
      counter++;
    }
  }
  for (let key in obj) {
    if (obj[key] > 0 && obj[key] === Math.max(...Object.values(obj))) {
      arr.push(key);
    }
  }
  return arr.sort();
}

console.log(maxSeparator("candle"));
