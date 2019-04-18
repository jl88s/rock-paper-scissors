
/// 0... Create a Human and Computer variables to store their scores & DOM id's
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetBtn = document.getElementById("reset-icon");

// 1... Computer randomly selects from the array and returns a value.
function computerPlay() {
    let computerRandomChoices = ['rock', 'paper', 'scissors'];
    let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)
    return computerRandomChoices[getRandomChoices];
}

// 2... Make a function that plays a single round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    console.log(`You selected: "${playerSelection}"`);
    console.log(`Computer selected: "${computerSelection}"`);

    // Tie 
    if (playerSelection === computerSelection) {
        document.getElementById('game-result').innerHTML = "It's a tie! Play again!";
        document.getElementById('game-result').style.color = "black";
    }
    // Rock beats Scissors
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            document.getElementById('game-result').innerHTML = "You win! Rock beats Scissors!";
            document.getElementById('game-result').style.color = "green";
            document.getElementById('human-score').innerHTML = playerScore;
        } else {
            computerScore++;
            document.getElementById('game-result').innerHTML = "You lose! Paper beats Rock!";
            document.getElementById('game-result').style.color = "red";
            document.getElementById('robot-score').innerHTML = computerScore;
        }
    }
    // Paper beats Rock
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            document.getElementById('game-result').innerHTML = "You win! Paper beats Rock!"
            document.getElementById('game-result').style.color = "green";
            document.getElementById('human-score').innerHTML = playerScore;
        } else {
            computerScore++;
            document.getElementById('game-result').innerHTML = "You lose! Scissors beats Paper!";
            document.getElementById('game-result').style.color = "red";
            document.getElementById('robot-score').innerHTML = computerScore;
        }
    }
    // Scissors beat Paper
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            document.getElementById('game-result').innerHTML = "You win! Scissors beats Paper!";
            document.getElementById('game-result').style.color = "green";
            document.getElementById('human-score').innerHTML = playerScore;
        } else {
            computerScore++;
            document.getElementById('game-result').innerHTML = "You lose! Rock beats Scissors!";
            document.getElementById('game-result').style.color = "red";
            document.getElementById('robot-score').innerHTML = computerScore;
        }
    }
}

//  3... Play a 5 round game that keeps score
function game(playerChoice) {
    let player = playerChoice;
    let computer = computerPlay();

    playRound(player, computer);

    if (playerScore == 5) {
        document.getElementById('computer-play-result').innerHTML = "WINNER WINNER CHICKEN DINNER!!!";
        document.getElementById('computer-play-result').style.color = "green";
        document.getElementById('computer-play-result').style.fontSize = "1.8em";
        document.getElementById('game-result').innerHTML = "";
    } else if (computerScore == 5) {
        document.getElementById('computer-play-result').innerHTML = "The computer has defeated you!";
        document.getElementById('computer-play-result').style.color = "red";
        document.getElementById('computer-play-result').style.fontSize = "1.8em";
        document.getElementById('game-result').innerHTML = "";
    }
};

//  4.... On click of event listener execute game function after user chooses RPS.
rock.addEventListener('click', () => {
    game("rock");
});
paper.addEventListener('click', () => {
    game("paper");
});
scissors.addEventListener('click', () => {
    game("scissors");
});
resetBtn.addEventListener('click', function () {
    location.reload();
});