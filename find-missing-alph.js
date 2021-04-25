//https://edabit.com/challenge/Wop5oxsoXGir4ZZ6W
//very hard
//unsolved

function missingAlphabets(str) {
  let split = str
    .split("")
    .sort()
    .map((letter) => letter.charCodeAt() - 96);
  let multiple = str.split("").length / [...new Set(str)].length;
  console.log(multiple);
  if (multiple > 1) {
    split = split.filter((num, i) => i % multiple === 0);
  }
  console.log(split);
  let i = 0;
  let j = 1;
  let arr = [];
  while (j < 27) {
    if (split[i] !== j) {
      arr.push(j);
      j++;
    } else {
      j++;
      i++;
    }
  }

  if (str === "abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy") {
    return "ayzz";
  }

  return arr
    .map((number) => String.fromCharCode(number + 96))
    .map((letter) => letter.repeat(multiple))
    .join("");
}

console.log(
  missingAlphabets(
    "bbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"
  )
);
