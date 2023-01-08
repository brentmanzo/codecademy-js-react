console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return console.log("Wrong input");
  }
};

const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  let win = "User won";
  let lose = "Computer won";

  if (userChoice === computerChoice) {
    return "Tie";
  }
  //Validate when user inputs rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return lose;
    } else return win;
  }
  //Validate when user inputs paper
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return lose;
    } else return win;
  }
  //Validate when user inputs scissors
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return lose;
    } else return win;
  } else if (userChoice === "bomb") {
    return win;
  }
};
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log(userChoice + " vs " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

// console.log(determineWinner(getUserChoice('rock'),getComputerChoice()));
