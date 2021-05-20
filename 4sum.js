var fourSum = function (nums, target) {
  let result = [];

  nums.sort((a, b) => a - b);
  let left;
  let right = nums.length - 1;
  let secondRight = nums.length - 2;

  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    secondRight = nums.length - 2;
    let sum;

    while (left < secondRight) {
      sum = nums[i] + nums[left] + nums[right] + nums[secondRight];
      if (sum === target) {
        result.push(
          [nums[i], nums[left], nums[right], nums[secondRight]].sort(
            (a, b) => a - b
          )
        );
        left++;
        secondRight--;

        while (nums[left] === nums[left - 1]) {
          left++;
          console.log(nums[left]);
        }
        while (nums[right] === nums[right + 1]) right--;
        while (nums[secondRight] === nums[secondRight + 1]) secondRight--;
      } else if (sum > target) {
        right--;
      } else if (sum > target) {
        secondRight--;
      } else {
        left++;
      }
    }
  }

  const setArray = new Set(result.map((x) => JSON.stringify(x)));
  const uniqArray = [...setArray].map((x) => JSON.parse(x));
  return uniqArray;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
