//https://leetcode.com/problems/longest-increasing-subsequence/
//medium
//unsolved

var lengthOfLIS = function (nums) {
  let arr = [];
  let k = 1;
  let i = 0;
  let increasing = 0;
  while (i < nums.length) {
    if (nums[k + 1] > nums[k]) {
      k++;
      increasing++;
    } else {
      k++;
    }
    if (k === nums.length) {
      arr.push(increasing);
      console.log(arr);
      i++;
      k = i + 1;
      increasing = 0;
    }
  }
  return arr;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
