//https://edabit.com/challenge/3zx9SHGic8mpoMhQs
//hard
//solved

function lostDog(...arr) {
  let obj = {};
  let j = 1;
  for (let [i, house] of arr.entries()) {
    if (house.includes(0)) {
      obj[`Dog${j}`] = `House (${i + 1}) and Room (${house.indexOf(0) + 1})`;
      j++;
    }
  }
  return obj;
}

console.log(
  lostDog(
    [1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1]
  )
);
