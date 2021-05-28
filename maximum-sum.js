//https://edabit.com/challenge/E3CFX4HAHBxSAM8rs
//expert
//this is a solution but not mine

function maxSum(nums) {
  let b = 0,
    c = 0;
  for (let n of nums) {
    c = Math.max(0, c + n);
    b = Math.max(b, c);
  }
  return b;
}

console.log(maxSum([-1, -9, 0, 8, -76, 5, 3]));
console.log(maxSum([3, -10, 4, -1, 2, 3, 6, -7]));
console.log(maxSum([-1, 2, 3, -9]));
console.log(maxSum([100, -9, 2, -3, 5]));
