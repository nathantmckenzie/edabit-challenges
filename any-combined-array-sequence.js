//https://edabit.com/challenge/paBuxiNBgHDDW4vEJ
//expert
//unsolved but this is the solution

function hasConsecutiveSeries(a1, a2) {
  var d1 = a1.length;
  var d2 = a2.length;
  var d = Math.max(d1, d2);
  var s1 = a1.reduce((a, b) => a + b);
  var s2 = a2.reduce((a, b) => a + b);
  //so basically just add up all the numbers in both arrays, and then divide by d - (d - 1) / 2 (remember that d is the length of the larger array)
  var n = (s1 + s2) / d - (d - 1) / 2;
  return Math.floor(n) == n;
}

console.log(
  hasConsecutiveSeries([16, 6, 7, 20, 12], [15, 15, 3, 12, 4, 26, 25])
);
console.log(hasConsecutiveSeries([1, 3, 2, 4, 5], [1, 1, 1, 1, 1]));
