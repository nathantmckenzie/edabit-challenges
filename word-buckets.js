//https://edabit.com/challenge/Q7foiyejfJG6pqqws
//expert
//solved

function bucketize(phrase, n) {
  let arr = phrase.split(" ");
  let length = 0;
  let string = "";
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(length, string);
    if (arr[i].length > n) {
      return [];
    } else if (arr[i].length + 1 + length > n) {
      array.push(string);
      string = arr[i];
      length = arr[i].length;
    } else if (arr[i].length + 1 + length <= n) {
      if (i === 0) {
        string += `${arr[i]}`; 
        length += arr[i].length;
      } else {
        string += ` ${arr[i]}`;
        length += arr[i].length + 1;
      }
    }
    if (i === arr.length - 1) array.push(string);
  }
  if (array[0] === "") array.shift();
  return array;
}

console.log(bucketize("she sells sea shells by the sea", 10));
console.log(bucketize("the mouse jumped over the cheese", 7));
console.log(bucketize("fairy dust coated the air", 20));
console.log(bucketize("a b c d e", 2));
console.log(bucketize("she sells sea shells by the sea", 2));
console.log(bucketize("the mouse jumped over the cheese", 7));
