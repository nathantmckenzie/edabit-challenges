//https://edabit.com/challenge/kficszsYY2ojKfDL9
//very hard
//solved

function overlap(s1, s2) {
  let firstWord = s1;
  let substring = "";
  let other = "";
  let newString = "";
  const string1Length = s1.length;
  if (s1 === s2) {
    return s1;
  }
  for (let i = 0; i < string1Length; i++) {
    console.log("S1 length", s1.length);
    substring = s2.substring(0, s1.length);
    other = s2.substring(s1.length);
    console.log(s1, substring);
    console.log(string1Length);
    if (s1 === substring) {
      return firstWord + other;
    }
    s1 = s1.substring(1);
  }
  if (newString === "") {
    return firstWord + s2;
  }
}

console.log(overlap("diction", "dictionary"));
console.log(overlap("sweden", "denmark"));
console.log(overlap("edabit", "iterate"));
console.log(overlap("diction", "dictionary"));
console.log(overlap("honey", "milk"));

//BETTER SOLUTION
const overlap = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (b.startsWith(a.slice(i))) {
      return a.slice(0, i) + b;
    }
  }
  return a + b;
};
