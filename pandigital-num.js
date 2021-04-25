//https://edabit.com/challenge/NXTrfGBXTKg3Z9jkz
//PASSED
//HARD

function isPandigital(num) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let counter = 0;
  let ordered = [...new Set(num.toString().split(""))];
  for (let i = 0; i < numbers.length; i++) {
    numbers.includes(ordered[i]) ? counter++ : counter;
  }
  return counter === 10;
}
console.log(isPandigital(98140723568910));
