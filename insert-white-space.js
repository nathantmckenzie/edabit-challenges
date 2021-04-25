// https://edabit.com/challenge/ew9dry9RzoaeiTzwX
//SOLVED
//HARD

function insertWhitespace(s) {
  let newSentence = "";
  let capital = /[A-Z]/;
  for (let char of s) {
    if (capital.test(char)) {
      newSentence += " " + char;
    } else {
      newSentence += char;
    }
  }
  return newSentence.substring(1);
}
