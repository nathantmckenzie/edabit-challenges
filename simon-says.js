//https://edabit.com/challenge/DxAhwhR3cxiHK9E4d
//very hard
//solved

function simonSays(arr) {
  let num = 0;
  for (let command of arr) {
    if (command.startsWith("Simon says")) {
      if (command.includes("add")) {
        num += Number(command.substring(command.length - 2));
      } else if (command.includes("subtract")) {
        num -= Number(command.substring(command.length - 2));
      } else if (command.includes("multiply")) {
        num *= Number(command.substring(command.length - 2));
      }
    }
  }
  return num;
}

console.log(
  simonSays([
    "Susan says add 10",
    "Simon says add 3",
    "Simon says multiply by 8",
  ])
);
