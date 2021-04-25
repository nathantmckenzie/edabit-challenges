//https://edabit.com/challenge/ayQR9ZBbR8LdXuwXq
//hard
//sovled

const findGlasses = (glasses) =>
  glasses.findIndex((glass) => /O-+O/.test(glass));

console.log(findGlasses(["phone", "O-O", "coins", "keys"]));
