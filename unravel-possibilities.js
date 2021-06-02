//https://edabit.com/challenge/enypHuKWgTmHWR2wy
//expert
//unsolved but this is the solution

const unravel = (str) => {
  const fork = str.match(/\[.*?\]/);
  //sooo interesting that it returns an array with the square brackets and everything inside it, the index
  if (!fork) return [str];
  const paths = fork[0].slice(1, -1).split("|");
  console.log("paths", paths);
  const i = fork.index;
  return paths
    .flatMap((path) =>
      unravel(str.slice(0, i) + path + str.slice(i + fork[0].length))
    )
    .sort();
};

console.log(unravel("a[b|c]"));
console.log(unravel("a[b|c]de[f|g]"));
console.log(unravel("a[b]c[d]"));
console.log(unravel("a[b|c|d|e]f"));
console.log(unravel("apple [pear|grape]"));
