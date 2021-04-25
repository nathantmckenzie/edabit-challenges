//https://edabit.com/challenge/bzir2NMSGMYDXeNEG
//very hard
//unsolved

function pigLatinSentence(sentence) {
  let newSentence = "";
  let split = sentence.split(" ");
  for (let word of split) {
    if (word.startsWith("i")) {
      newSentence += word + "way ";
    } else {
      newSentence += word.substring(1) + " ";
    }
  }
  return newSentence;
}

console.log(pigLatinSentence("this is pig latin"));
