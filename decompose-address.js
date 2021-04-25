//https://edabit.com/challenge/xAc7G3AzGgQzLabTe
//very hard
//SOLVED!!

function decomposeAddress(str) {
  let arr4 = [];
  let arr5 = [];
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (split.length === 7) {
      if (i === 1) {
        arr5.push(split[1] + " " + split[2]);
      } else if (i === 3) {
        arr5.push(split[3] + " " + split[4]);
      } else {
        arr5.push(split[i]);
      }
    } else if (split.length === 6) {
      if (i === 1) {
        arr4.push(split[1] + " " + split[2]);
      } else {
        arr4.push(split[i]);
      }
    }
  }
  if (split.length === 6) {
    arr4.splice(2, 1);
    arr4[2] = arr4[2].substring(0, arr4[2].length - 1);
    return arr4;
  } else {
    arr5.splice(2, 1);
    arr5.splice(3, 1);
    arr5[2] = arr5[2].substring(0, arr5[2].length - 1);
    arr5[3] = arr5[3].substring(0, arr5[2].length - 1);
    return arr5;
  }
}

console.log(decomposeAddress("557 Farmer Rd Corner, MT 59105"));
console.log(decomposeAddress("3315 Vanity St Beverly Hills, CA 90210"));
