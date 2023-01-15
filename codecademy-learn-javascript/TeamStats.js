const team = {
    _players: [
      {
        firstName: "Lebron",
        lastName: "James",
        age: 99,
      },
      {
        firstName: "Kobe",
        lastName: "Bryant",
        age: 99,
      },
      {
        firstName: "Luka",
        lastName: "Doncic",
        age: 99,
      },
    ],
    _games: [
      {
        opponent: "Cavs",
        teamPoints: 45,
        opponentPoints: 50,
      },
      {
        opponent: "Miami",
        teamPoints: 45,
        opponentPoints: 50,
      },
      {
        opponent: "Lakers",
        teamPoints: 45,
        opponentPoints: 50,
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
  
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      }
      this._games.push(game)
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame('Titans', 100, 98)
  console.log(team.players);
  console.log(team.games)
  