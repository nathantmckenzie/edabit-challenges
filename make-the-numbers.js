//https://edabit.com/challenge/sEn8HvF2pHiv4La2N
//very hard
//solved!

function canBuild(digits, arr) {
  for (let i = 0; i < arr.length; i++) {
    let nums = arr[i]
      .toString()
      .split("")
      .map((num) => Number(num));

    for (let j = 0; j < nums.length; j++) {
      if (digits[nums[j]] > 0) {
        digits[nums[j]] -= 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]));
