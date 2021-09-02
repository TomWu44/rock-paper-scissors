// Step 1. Get the user’s choice.

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

// Step 2. Get the computer’s choice.

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
};

// Step 3.Compare the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
     return  'This Game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry' computer, you won!"
    } else { 
      return "Congratulations, you won!";
    }
  }  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Sorry' computer, you won!"
    } else {
      return "Congratulations, you won!";
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'Rock') {
      return "Sorry' computer, you won!"
    } else {
      return "Congratulations, you won!";
    } 
  } 
  if (userChoice === 'bomb') {
      return "Congratulations, you won!";
  }
};

//Start 4. Start the program and display the results.

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}.`);
  console.log(`The computer threw ${computerChoice}.`);

// Final step

console.log(determineWinner(userChoice,computerChoice))
};

playGame()




