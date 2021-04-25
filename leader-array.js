//https://edabit.com/challenge/wYdQGudMRdzME5B7m
//hard

function leader(arr) {
  return arr.filter((v, i) => v === Math.max(...arr.slice(i)));
}

console.log(leader([8, 7, 1, 2, 10, 3, 6, 7, 5, 8]));
