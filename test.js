let allGames = [
  { winner: "Alice", loser: "Bob", loser_points: 3 },
  { winner: "Carol", loser: "Dean", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Carol", loser_points: 4 },
  { winner: "Alice", loser: "Carol", loser_points: 2 },
  { winner: "Carol", loser: "Dean", loser_points: 3 },
  { winner: "Dean", loser: "Elise", loser_points: 2 },
];

const showPlayers = (games) => {
  const obj = {};
  for (let i = 0; i < games.length; i++) {
    obj[games[i].winner] = [];
    obj[games[i].loser] = [];
    if (!obj[games[i].winner].includes(games[i].loser)) {
      obj[games[i].winner].push(games[i].loser);
    }
  }
  return obj;
};

console.log(showPlayers(allGames));
