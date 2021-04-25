//https://edabit.com/challenge/rdK3DgsTrx6jg97Ab
//very hard
//unsolved

const numbersToRanges = (nums) => {
  const range = [];
  let rangeStart = nums[0];

  for (let [i, num] of nums.entries()) {
    const nextNum = nums[i + 1];

    if (nextNum !== num + 1) {
      range.push(num === rangeStart ? `${num}` : `${rangeStart}-${num}`);
      rangeStart = nextNum;
    }
  }

  return range;
};

//console.log(numbersToRanges([6, 7, 8, 10, 11, 12]));
//console.log(numbersToRanges([1, 2, 3, 4, 5]));
//console.log(numbersToRanges([1, 2, 3, 6, 7, 8]));
console.log(numbersToRanges([1, 3, 4, 5, 6, 7]));
