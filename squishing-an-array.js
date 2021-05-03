//https://edabit.com/challenge/8p7apuCwgSzWkaTC8
//very hard
//solved

function squish(arr, d) {
  let finalArr = [arr];
  let newArr = [...arr];
  if (arr.length === 0) return [];
  if (d === "left") {
    while (newArr.length > 1) {
      let firstTwo = newArr.splice(0, 2);
      let reduce = firstTwo.reduce((acc, cur) => acc + cur);
      newArr = [reduce, ...newArr];
      let ok = [...newArr];
      finalArr.push(ok);
    }
  } else if (d === "right") {
    while (newArr.length > 1) {
      let firstTwo = newArr.reverse().splice(0, 2);
      let reduce = firstTwo.reduce((acc, cur) => acc + cur);
      newArr = [...newArr.reverse(), reduce];
      let ok = [...newArr];
      finalArr.push(ok);
    }
  }
  return finalArr;
}

console.log(squish([1, 2, 3, 4, 5], "right"));
