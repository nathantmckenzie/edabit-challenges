//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//easy
//unsolved

var removeDuplicates = function (nums) {
  let indexCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[1 - 1]) {
      nums[indexCounter] = nums[i];
      indexCounter++;
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));
