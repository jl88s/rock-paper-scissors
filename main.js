
/// 0... Create a Human and Computer variables to store their scores
let playerScore = 0;
let computerScore = 0;
let rounds = 0;


// 1... Computer randomly selects from the array and returns a value.
function computerPlay() {
     let computerRandomChoices = ['rock', 'paper', 'scissors'];
     let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)
    return computerRandomChoices[getRandomChoices];
}

// 2... Player inputs their selection and returns a case-insensitive value.
function humanPlay() {
    let playerInput = prompt("Please select one: Rock, Paper, or Scissors?");

    // Checks if user input is not empty.
    if (playerInput === null) {
        return "null";
    } else if (playerInput === "") {
        alert("You can't leave the box empty!")
    } else {
        // this took me a day and a half to fingure out!
       return playerInput.toLowerCase();
    }
}

// 3... Make a function that plays a single round of Rock, Paper, Scissors.
function playRound() {
    let playerSelection = humanPlay();
    let computerSelection = computerPlay();

    // Tie 
    if (playerSelection === computerSelection) {
        rounds * 1;
        return "It's a tie! Play again!";
    }

    // Rock beats Scissors
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            return "You win! Rock beats Scissors!";
        } else {
            computerScore++;
            return "You lose, Paper beats Rock!";
        }
    }  
    // Paper beats Rock
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return "You win! Paper beats Rock!"
        } else {
            computerScore++;
            return "You lose, Scissors beats Paper!";
        }
    }   
    // Scissors beat Paper
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            return "You win! Scissors beats Paper!";
        } else {
            computerScore++;
            return "You lose, Rock beats Scissors!";
        }
    }
}
 
//  4... Play a 5 round game that keeps score
function game() {
    for (let rounds = 1 ; rounds <= 5 ; rounds++) {
        console.log(playRound());
        console.log(`Round ${rounds} [ Your score: ${playerScore} | Computer's score: ${computerScore} ]`);
      }

      if (playerScore == 5) {
        return "CONGRATULATIONS - YOU WON!";
    } else if (computerScore == 5) {
        return "THE COMPUTER HAS DEFEATED YOU! YOU LOSE!";
    } else {
        return "It's a draw!";
    }
}

game();