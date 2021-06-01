//https://edabit.com/challenge/y7xoBP9bgHRNTcELK
//expert
//unsolved

const words = [
  "a",
  "an",
  "after",
  "al",
  "and",
  "are",
  "as",
  "by",
  "continued",
  "deadlines",
  "doubly",
  "fish",
  "for",
  "go",
  "happen",
  "happened",
  "i",
  "illusion",
  "is",
  "long",
  "love",
  "lunchtime",
  "make",
  "moment",
  "noise",
  "nothing",
  "of",
  "or",
  "people",
  "problem",
  "second",
  "so",
  "summarize",
  "summary",
  "thanks",
  "the",
  "then",
  "they",
  "time",
  "to",
  "whooshing",
];

function cleave(str) {
  let i = 0,
    j = 1;
  let string = "";
  while (j <= str.length) {
    let substring = str.substring(i, j);
    if (j === str.length && words.includes(substring)) {
      string += substring;
      return string;
    } else if (j === str.length && !words.includes(substring)) {
      return "Cleaving stalled: Word not found";
    }
    if (words.includes(substring) && !words.includes(str.substring(i, j + 1))) {
      string += `${substring} `;
      i = j;
      //console.log(substring, i, j);
      j = i + 1;
    } else if (
      words.includes(substring) &&
      words.includes(str.substring(i, j + 1))
    ) {
      while (words.includes(str.substring(i, j + 1))) {
        j++;
      }
    } else {
      j++;
    }
  }
  return string;
}

console.log(cleave("solongandthanksforalthefish"));
console.log(cleave("solongandthanksforalllthefish"));
console.log(cleave("tosummarizethesummaryofthesummarypeopleareaproblem")); //works
console.log(cleave("timeisanillusionlunchtimedoublyso")); //works
console.log(cleave("ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby")); //works
console.log(
  cleave(
    "foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen"
  )
);
