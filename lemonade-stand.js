//https://edabit.com/challenge/x6mru9JBSJz9Kzhjm
//very hard
//solved!!

function lemonadeStand(arr) {
  let totalChange = { 5: 0, 10: 0, 20: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) totalChange[5] += 1;
    let change = arr[i] - 5;
    while (change > 0) {
      if (change >= 20) {
        if (totalChange[20] != 0) {
          totalChange[20] -= 1;
          change -= 20;
          console.log("you have $20", totalChange);
        } else {
          console.log("Don't have any more $20");
          return false;
        }
      } else if (change < 20 && change >= 10) {
        if (totalChange[10] != 0) {
          totalChange[10] -= 1;
          change -= 10;
          console.log("you have $10", totalChange);
        } else if (totalChange[5] >= 2) {
          totalChange[5] -= 2;
          totalChange[10] += 1;
          change = 0;
        } else {
          console.log("Don't have any more $10", totalChange);
          return false;
        }
      } else if (change < 10 && change >= 5) {
        if (totalChange[5] != 0) {
          totalChange[5] -= 1;
          totalChange[10] += 1;
          change -= 5;
          console.log("you have $5", totalChange);
        } else {
          console.log("Don't have any more $5");
          return false;
        }
      }
    }
  }
  return true;
}

console.log(lemonadeStand([5, 5, 5, 10, 20]));
console.log(lemonadeStand([10, 10]));
console.log(lemonadeStand([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10]));
console.log(lemonadeStand([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]));
