//https://edabit.com/challenge/E5kxeJA782rNX2bch
//very hard
//unsolved - this is the solution tho

function nearestChapter(chapt, page) {
  return Object.entries(chapt).reduce((acc, curr) => {
    if (Math.abs(curr[1] - page) <= Math.abs(acc[1] - page)) {
      acc = curr;
    }
    return acc;
  })[0];
}

console.log(
  nearestChapter(
    {
      "Chapter 1": 1,
      "Chapter 2": 15,
      "Chapter 3": 37,
    },
    10
  )
);
