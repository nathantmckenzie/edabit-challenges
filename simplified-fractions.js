//https://edabit.com/challenge/ZNnfzsWj5i6S93Cxk
//very hard
//unsolved

function simplify(str) {
  let split = str.split("");
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    if (numbers.includes(split[i])) {
      arr.push(Number(split[i]));
    }
  }
  while (arr[0] % 2 !== 0 && arr[1] % 2 !== 0) {
    arr;
  }
}

console.log(simplify("4/6"));
