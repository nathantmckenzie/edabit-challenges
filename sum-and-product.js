// https://edabit.com/challenge/KHviGBCvBXHLAGuPA

function sumAndProduct(s, p) {
  let arr = [];
  for (let i = -5; i < 5; i += 0.1) {
    for (let k = -5; k < 5; k += 0.1) {
      if (
        parseFloat(i.toFixed(1)) + parseFloat(k.toFixed(1)) === s &&
        parseFloat(i.toFixed(1)) * parseFloat(k.toFixed(1)) === p
      ) {
        arr.push(parseFloat(i.toFixed(1)), parseFloat(k.toFixed(1)));
      }
    }
  }
  return arr.slice(0, 2);
}

console.log(sumAndProduct(2, -15));
