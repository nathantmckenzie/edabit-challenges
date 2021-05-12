let threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    let left = sorted[i + 1];
    let right = sorted[sorted.length];
    let sum;
  }
};

console.log(threeSum([0, 4, 2, 1, 5, 6, 3, 2, 3, -2, -1, -3, -2, -5, 4, 3, 2]));
