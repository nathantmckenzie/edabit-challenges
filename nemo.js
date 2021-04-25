function findNemo(sentence) {
  let arr = sentence.split(" ").indexOf("Nemo");
  return arr;
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
