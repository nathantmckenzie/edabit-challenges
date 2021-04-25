//https://edabit.com/challenge/3q6tbKL8BS4CgaR4c
//very hard
//basically solved (expect for massively large number)

function addStrNums(num1, num2) {
  let number1 = Number(num1);
  let number2 = Number(num2);
  if (isNaN(number1) || isNaN(number2)) {
    return -1;
  } else {
    return (number1 + number2).toString();
  }
}

console.log(addStrNums("9", "4"));
