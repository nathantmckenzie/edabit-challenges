//https://leetcode.com/problems/search-insert-position/
//easy
//solved

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    else if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 7));
