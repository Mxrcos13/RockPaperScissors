let playerScore = 0;
let computerScore = 0;
const round = document.querySelector('.round');

function playRound(playerChoice, computerChoice){

    round.classList.remove('lose', 'win', 'tie');

    switch(playerChoice.toLowerCase()){
        case "rock":
            switch(computerChoice){
                case "rock":
                    round.textContent = "Tie! Rock and Rock";
                    round.classList.add('tie');
                    break;
                case "paper":
                    round.textContent = "You Lose! Paper beats Rock";
                    round.classList.add('lose');
                    computerScore++;
                    break;
                case "scissors":
                    round.textContent = "You Win! Rock beats Scissors";
                    round.classList.add('win');
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    round.textContent= 'You Win! Paper beats Rock';
                    round.classList.add("win");
                    playerScore++;
                    break;
                case "paper":
                    round.textContent = 'Tie! Paper and Paper';
                    round.classList.add('tie');
                    break;
                case "scissors":
                    round.textContent = 'You Lose! Scissors beats Paper';
                    round.classList.add('lose');
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                   round.textContent = 'You Lose! Rock beats Scissors';
                   round.classList.add('lose');
                   computerScore++;
                   break;
                case "paper":
                    round.textContent = 'You Win! Scissors beats Paper';
                    round.classList.add('win');
                    playerScore++;
                    break;
                case "scissors":
                    round.textContent = 'Tie! Scissors and Scissors';
                    round.classList.add('tie');
                    break;
            }
            break;
        default:
            
    }
    updateScore();
}

function getComputerChoice(){
    choice = Math.floor(Math.random()* 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function updateScore(){
    const score = document.querySelector('.score');
    score.textContent = `Player Score : ${playerScore} Computer Score : ${computerScore}`;
    if(playerScore === 5) {
        document.querySelector('.popuptext').textContent = 'You Win!';
        document.querySelector('.popup').style.visibility = 'visible';
    }else if(computerScore === 5){
        document.querySelector('.popuptext').textContent = 'You Lose!';
        document.querySelector('.popup').style.visibility = 'visible';
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.popup').style.visibility = 'hidden';
    round.textContent = 'Choose your play';
    round.classList.remove('lose', 'win', 'tie');
    updateScore();

}

function handleClick(e) {
    const playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice());
}

function playAgain(){
    resetGame();

}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playAgainButton = document.getElementById('playagain');

rockButton.addEventListener("click", handleClick);
paperButton.addEventListener("click", handleClick);
scissorsButton.addEventListener("click", handleClick);
playAgainButton.addEventListener("click",playAgain);
