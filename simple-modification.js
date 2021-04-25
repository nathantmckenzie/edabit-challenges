//https://edabit.com/challenge/sgQHrZ9g43ryTGFtR
//hard

function modify(txt) {
  let reversed = txt.split("").reverse();
  let arr = [];
  for (let letter of reversed) {
    arr.push(letter.charCodeAt() - 96);
  }
  return (Number(arr.join("")) >>> 0).toString(2);
}

console.log(modify("hello"));
