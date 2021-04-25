function ok(arr) {
  for (let [i, num] of arr.entries()) {
    console.log(`${i}:${num}`);
  }
}

console.log(ok([1, 2, 3, 4]));
