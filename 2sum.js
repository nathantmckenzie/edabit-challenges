//https://leetcode.com/problems/two-sum/
//easy
//unsolved

//let twoSum = (nums, target) => {
//  let previousValues = {};
//  for (let i = 0; i < nums.length; i++) {
//    let currentNumber = nums[i];
//    let neededValue = target - currentNumber;
//    let index2 = previousValues[neededValue];
//    if (index2 != null) {
//      console.log("INDEX2", index2);
//      return [index2, i];
//    } else {
//      previousValues[currentNumber] = i;
//      console.log(i);
//    }
//  }
//};
//
//console.log(twoSum([24, 7, 3, 2, 11, 15], 9));

let twoSum = (nums, target) => {
  let previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let neededValue = target - currentNumber;
    let index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};

console.log(twoSum([24, 7, 3, 2, 11, 15], 9));
