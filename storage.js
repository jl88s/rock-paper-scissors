
/// 0... Create a Human and Computer variables to store their scores
let playerScore = 0;
let computerScore = 0;
let draw = 0;

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
        draw++
        return "It's a draw! Play again!";
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

//  4... Checks the scores to keep playing or not

// ``````````one solution```````
// if (playerScore == 3) {
//     return `You got a score of ${playerScore} - Human WINS!`;
// } else if (computerScore == 3) {
//     return `Pc got a score of ${computerScore} - Computer WINS!`;
// }


// ````````another solution``````
// function game() {
//     for (let i = 0 ; i <= 5 ; i++) {
//         let playerSelection = humanPlay();
//         let computerSelection = computerPlay();

//         console.log(playRound(playerSelection, computerSelection))
//         console.log(`[ Your score: ${playerScore} | Computer's score: ${computerScore} ]`);
//       }

//     if (playerScore > computerScore) {
//         return "CONGRATULATIONS - YOU WON!";
//     } else if (playerScore < computerScore) {
//         return "THE COMPUTER HAS DEFEATED YOU! YOU LOSE!";
//     } else {
//         return "Draw game!";
//     }








/* 
you don't want to call for user input in a for loop like that
why are you using a for loop at all? 

- have a counter variable for rounds, 
- and each round incriment it; 
- or just whoever's score gets to 3 first is the winner

you don't even need to track rounds, just whoever gets 3 wins first wins 
*/