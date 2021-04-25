function chosenWine(wines) {
  let sorted = wines.map((wine) => wine.price).sort((a, b) => a - b);
  sorted.splice(0, 1);
  for (let wine of wines) {
    if (wines.length === 1) {
      return wine.name;
    } else if (wine.length === 0) {
      return null;
    } else if (wine.price === sorted[0]) {
      return wine.name;
    }
  }
}

console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ])
);
