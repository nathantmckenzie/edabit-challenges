//https://edabit.com/challenge/5hsyLC2Ntgoqn2wAy
//very hard
//solved

function findAllDigits(nums) {
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const newArr = nums.map((numbers) => numbers.toString().split(""));
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (i == newArr.length - 1 && j == 3 && arr.length > 0) {
        return "Missing digits!";
      }
      if (arr.includes(newArr[i][j]) && arr.length == 1) {
        arr = arr.filter((item) => item !== newArr[i][j]);
        return Number(newArr[i].join(""));
      } else if (arr.includes(newArr[i][j])) {
        arr = arr.filter((item) => item !== newArr[i][j]);
      }
    }
  }
}
console.log(
  findAllDigits([4823, 1049, 9555, 9466, 2191, 9316, 1105, 4489, 8318, 7081])
);
