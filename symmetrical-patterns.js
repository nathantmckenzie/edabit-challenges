//https://edabit.com/challenge/3Z26nkfwANCBguJCu
//expert
//solved

function symmetricalPatterns(matrix) {
  let verticallySymmetrical = [...matrix].every(
    (row) => JSON.stringify(row) === JSON.stringify([...row].reverse(""))
  );
  let horizontallyInverted = [...matrix].reverse();
  let horizontallySymmetrical = matrix.every(
    (row, index) =>
      JSON.stringify(row) === JSON.stringify(horizontallyInverted[index])
  );
  if (verticallySymmetrical && horizontallySymmetrical) {
    return "perfect";
  } else if (verticallySymmetrical) {
    return "vertically symmetric";
  } else if (horizontallySymmetrical) {
    return "horizontally symmetric";
  } else {
    return "imperfect";
  }
}

console.log(
  symmetricalPatterns([
    ["a", "a"],
    ["a", "a"],
  ])
); //perfect
console.log(
  symmetricalPatterns([
    ["a", "a", "b"],
    ["a", "a", "a"],
    ["b", "a", "a"],
  ])
); //imperfect
console.log(
  symmetricalPatterns([
    ["b", "a"],
    ["b", "a"],
  ])
); //horizontally symmetric
console.log(
  symmetricalPatterns([
    ["a", "a"],
    ["b", "b"],
  ])
); //vertically symmetric
