//https://edabit.com/challenge/Hx8tidhX6gXNK56aF
//very hard
//solved

function canComplete(initial, word) {
  let i = 0;
  let j = 0;
  while (i < initial.length) {
    if (initial.charAt(i) === word.charAt(j)) {
      i++;
      j++;
    } else {
      j++;
    }
    if (j > word.length) {
      return false;
    }
  }
  return true;
}

console.log(canComplete("budtl", "beautiful"));
