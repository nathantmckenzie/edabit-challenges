function secondLargest(arr) {
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sorted);
  return sorted[sorted.length - 2];
}

console.log(secondLargest([25, 143, 89, 13, 105]));
