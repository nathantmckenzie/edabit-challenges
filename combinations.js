//https://edabit.com/challenge/tRx22rECqK4dTJTg8

function combinations(...items) {
  if (items.includes(0)) {
    const indexOfZero = items.indexOf(0);
    items = items.filter((x) => x !== 0);
    console.log(items);
    return items.reduce((x, y) => x * y);
  } else {
    return items.reduce((x, y) => x * y);
  }
}

console.log(combinations(3, 0, 0, 0, 4));
