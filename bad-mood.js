//https://edabit.com/challenge/tWm9EtfbJEJPHcCug
//expert
//solved

function highestOccurence(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

function greatestImpact(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i][0]);
  }
  if (array.every((num) => num === 10)) return "Nothing";
  let causes = [];
  for (let i = 0; i < arr.length; i++) {
    let weather = arr[i][1] / 10;
    let meals = arr[i][2] / 3;
    let sleep = arr[i][3] / 10;
    if (arr[i][0] < 10) {
      if (Math.min(weather, meals, sleep) === weather) {
        causes.push("Weather");
      } else if (Math.min(weather, meals, sleep) === meals) {
        causes.push("Meals");
      } else if (Math.min(weather, meals, sleep) === sleep) {
        causes.push("Sleep");
      }
    }
  }
  return highestOccurence(causes);
}

console.log(
  greatestImpact([
    [1, 1, 3, 10],
    [1, 1, 3, 10],
    [1, 1, 3, 10],
  ])
);
