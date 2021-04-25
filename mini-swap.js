//https://edabit.com/challenge/HZcpmfBg6NstB5soN
//solved

function minSwaps(s1, s2) {
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      counter++;
    }
  }
  return counter / 2;
}
console.log(minSwaps("10011001", "01100110"));
