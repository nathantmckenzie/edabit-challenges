//https://edabit.com/challenge/t5w3KeLXzs5ChWDMo
//hard
//solved

function showTheLove(arr) {
  let min = Math.min(...arr);
  let addToMin = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      newArr.push(arr[i] * 0.75);
      addToMin += arr[i] * 0.25;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.map((number) => (number === min ? number + addToMin : number));
}

console.log(showTheLove([4, 1, 4]));
