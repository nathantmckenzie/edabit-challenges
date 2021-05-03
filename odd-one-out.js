//https://edabit.com/challenge/PEecJK7uPz5m2oD9i
//very hard
//solved

function oddOneOut(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].length] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].length] += 1;
  }
  if (Object.values(obj).length > 2) {
    return false;
  } else if (Object.values(obj).every((value) => value > 1)) {
    return false;
  } else {
    return true;
  }
}

console.log(oddOneOut(["silee", "meom", "let", "the"]));
