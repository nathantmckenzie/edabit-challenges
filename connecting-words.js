//https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy
//expert
//solved

const join = (arr) => {
  let fullString = "";
  let i = 0;
  let k = 0;
  let overLapping = arr[i];
  let numbers = [];
  while (i < arr.length - 1) {
    if (arr[i + 1].startsWith(overLapping)) {
      numbers.push(arr[i].length - k);

      if (i === 0) {
        fullString += arr[i].substring(0, k) + arr[i + 1];
      } else {
        let length = arr[i].length - k;
        fullString += arr[i + 1].substring(length);
      }
      i++;
      k = 0;
    } else {
      k++;
      overLapping = arr[i].substring(k);
    }
  }
  let minimumValue = Math.min(...numbers);
  if (minimumValue > 0) {
    return [fullString, minimumValue];
  } else {
    return [
      fullString.concat(arr[arr.length - 2].concat(arr[arr.length - 1])),
      0,
    ];
  }
};

console.log(join(["oven", "envier", "erase", "serious"]));
console.log(join(["move", "over", "very"]));
console.log(join(["to", "ops", "psy", "syllable"]));
console.log(join(["aaa", "bbb", "ccc", "ddd"]));
