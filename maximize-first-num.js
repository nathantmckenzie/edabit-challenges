//https://edabit.com/challenge/7vowiHDR5oYksAjqQ
//very hard
//SOLVED!!!

function maxPossible(n1, n2) {
  let firstArr = n1.toString(10).replace(/\D/g, "0").split("").map(Number);
  let secondArr = n2.toString(10).replace(/\D/g, "0").split("").map(Number);
  let num = "";
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] < Math.max(...secondArr)) {
      num += Math.max(...secondArr).toString();
      secondArr.sort((a, b) => b - a);
      secondArr.shift();
    } else if (firstArr[i] > Math.max(...secondArr)) {
      num += firstArr[i].toString();
    }
  }
  return Number(num);
}

console.log(maxPossible(52, 762));
console.log(maxPossible(9132, 5564)); //9655
console.log(maxPossible(8732, 91255));
console.log(maxPossible(523, 76)); //
