//https://edabit.com/challenge/ogDHjfpAcE896kN4H
//expert
//unsolved

function canExit(matrix) {
  if (matrix[0][0] !== 0) return false;
  if (matrix[matrix.length - 1][matrix[0].length - 1] !== 0) return false;
  const sizes = [];
  let answer = [];
  let ok = [];
  const visited = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes, answer, ok);
    }
  }
  let i = 0;
  console.log("ok", ok);
  while (i < answer.length) {
    if (
      answer[i][0] + 1 !== answer[i + 1][0] &&
      answer[i][0] !== answer[i + 1][0] &&
      answer[i][1] !== answer[i + 1][1] &&
      answer[i][1] + 1 !== answer[i + 1][1]
    ) {
      //console.log(answer[i]);
      return false;
    }
    i++;
  }
  return true;
}

function traverseNode(i, j, matrix, visited, sizes, answer, ok) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 1) continue;
    currentRiverSize++;
    answer.push([i, j]);
    console.log(answer, i, j);
    if (i === matrix.length - 1 && j === matrix[0].length - 1) {
      console.log("hi", answer);
      ok = answer;
      return ok;
    }
    //console.log(answer);
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

console.log(
  canExit([
    [0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0],
  ])
);

console.log(
  canExit([
    [0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1],
  ])
);

console.log(
  canExit([
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
  ])
);

console.log(
  canExit([
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
  ])
);
