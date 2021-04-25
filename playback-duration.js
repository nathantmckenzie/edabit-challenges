function playbackDuration(duration, speed) {
  const number = parseInt(duration.split(":").join("")) / speed;
  const arr = number.toString().split("");
  return "00:" + arr[0] + arr[1] + ":" + arr[2] + arr[3];
}

console.log(playbackDuration("00:30:00", 2));
console.log(playbackDuration("01:20:00", 1.5));
console.log(playbackDuration("51:20:09", 0.5));
