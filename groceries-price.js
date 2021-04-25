//https://edabit.com/challenge/jRSST87NjECBzbwzL
//solved

function getTotalPrice(groceries) {
  let prices = groceries.map((x) => x.price * x.quantity);
  let multiplier = Math.pow(10, 2);
  let total = prices.reduce((accum, curr) => accum + curr);
  return Math.round(total * multiplier) / multiplier;
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
