let threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let left;
  let right;
  let array = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    left = i + 1;
    right = sorted.length - 1;

    while (left < right) {
      let sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === 0) {
        array.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
  return array;
};

console.log(threeSum([0, 4, 2, 1, 5, 6, 3, 2, 3, -2, -1, -3, -2, -5, 4, 3, 2]));
