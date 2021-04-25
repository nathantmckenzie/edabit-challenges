//https://edabit.com/challenge/xPnZKhYcn5TwK3HFT
//very hard
//unsolved

function palindromeSieve(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i].toString().split("").reverse().join("") === nums[i].toString()
    ) {
      arr.push(nums[i]);
    } else if (nums[i].toString() === 1) {
      arr.push(nums[i]);
    } else if ()
  }
  return arr;
}

console.log(palindromeSieve([443, 12, 639, 121, 3232]));
