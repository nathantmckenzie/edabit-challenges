//https://edabit.com/challenge/ujzhzyvGoASKxSAib
//hard
//solved

function chosenWine(wines) {
  if (wines.length === 0) {
    return null;
  } else if (wines.length > 1) {
    wines.sort((a, b) => a.price - b.price);
    return wines[1].name;
  } else if ((wines.length = 1)) {
    return wines[0].name;
  }
}

chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 },
  { name: "Wine 10", price: 1.99 },
  { name: "Wine 333", price: 3.99 },
]);
