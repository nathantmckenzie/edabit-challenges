//https://edabit.com/challenge/RdHCBE4GXzdAEFQug

function swapTwo(s) {
  let str = "";
  let arr = s.split("");
  for (let i = 0; i < arr.length; i += 4) {
    str += arr[2];
    str += arr[3];
  }
  return str;
}

console.log(swapTwo("ABCDEFGH"));
