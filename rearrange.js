//https://edabit.com/challenge/TZR9EM6xcJrer4Naq
//very hard
//solved

function rearrange(sentence) {
  let split = sentence.split(" ");
  let nums = /["1, 2, 3, 4, 5, 6, 7, 8, 9, 0"]/;
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    let num = Number(split[i].match(nums));
    arr[num] = split[i].replace(num, "");
  }
  return arr.splice(1).join(" ");
}

console.log(rearrange("is2 Thi1s T4est 3a"));
