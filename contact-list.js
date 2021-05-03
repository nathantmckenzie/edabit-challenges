//https://edabit.com/challenge/oK8YTFzTDBzjQpmtH
//very hard
//solved

const swap = (x, y) => ([...xs]) =>
  xs.length > 1 ? (([xs[x], xs[y]] = [xs[y], xs[x]]), xs) : xs;

function sortContacts(names, sort) {
  if (!names) return [];
  const arr = [];
  const swapNames = swap(0, 1);
  if (sort === "ASC") {
    let split = names.map((name) => name.split(" "));
    const final = split
      .map((array) => swapNames(array))
      .sort()
      .map((array) => swapNames(array))
      .flat();
    for (let i = 0; i < final.length; i++) {
      if (i % 2 === 0) {
        arr.push(final[i].concat(` ${final[i + 1]}`));
      }
    }
    return arr;
  } else if (sort === "DESC") {
    let split = names.map((name) => name.split(" "));
    const final = split
      .map((array) => swapNames(array))
      .sort()
      .reverse()
      .map((array) => swapNames(array))
      .flat();
    for (let i = 0; i < final.length; i++) {
      if (i % 2 === 0) {
        arr.push(final[i].concat(` ${final[i + 1]}`));
      }
    }
    return arr;
  }
}

console.log(
  sortContacts(
    ["John Locke", "Thomas Aquinas", "David Hume", "Rene Descartes"],
    "DESC"
  )
);
