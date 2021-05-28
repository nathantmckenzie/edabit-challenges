//https://edabit.com/challenge/vZ5fXMmqfzXQ5dQBv
//expert
//unsolved

function stringBuilder(s) {
  return s.split("[").join("").split("]");
}

console.log(stringBuilder("3[a]2[bc]"));
console.log(stringBuilder("3[a2[c]]"));
console.log(stringBuilder("2[abc]3[cd]ef"));
console.log(stringBuilder("abc3[cd]xyz"));
console.log(stringBuilder("1[Mubashir_]i3[s]1[_Air]1[_Force]1[_Fan]"));
