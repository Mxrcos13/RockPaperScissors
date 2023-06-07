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
                    document.getElementById('computerimg').src = './images/rock.webp';
                    break;
                case "paper":
                    round.textContent = "You Lose! Paper beats Rock";
                    round.classList.add('lose');
                    computerScore++;
                    document.getElementById('computerimg').src = './images/paper.jpeg';
                    break;
                case "scissors":
                    round.textContent = "You Win! Rock beats Scissors";
                    round.classList.add('win');
                    playerScore++;
                    document.getElementById('computerimg').src = './images/scissors.jpeg';
                    break;
            }
            document.getElementById('playerimg').src = './images/rock.webp';
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    round.textContent= 'You Win! Paper beats Rock';
                    round.classList.add("win");
                    playerScore++;
                    document.getElementById('computerimg').src = './images/rock.webp';
                    break;
                case "paper":
                    round.textContent = 'Tie! Paper and Paper';
                    round.classList.add('tie');
                    document.getElementById('computerimg').src = './images/paper.jpeg';
                    break;
                case "scissors":
                    round.textContent = 'You Lose! Scissors beats Paper';
                    round.classList.add('lose');
                    computerScore++;
                    break;
            }
            document.getElementById('playerimg').src = './images/paper.jpeg';
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                   round.textContent = 'You Lose! Rock beats Scissors';
                   round.classList.add('lose');
                   computerScore++;
                   document.getElementById('computerimg').src = './images/rock.webp';
                   break;
                case "paper":
                    round.textContent = 'You Win! Scissors beats Paper';
                    round.classList.add('win');
                    playerScore++;
                    document.getElementById('computerimg').src = './images/paper.jpeg';
                    break;
                case "scissors":
                    round.textContent = 'Tie! Scissors and Scissors';
                    round.classList.add('tie');
                    break;
            }
            document.getElementById('playerimg').src = './images/scissors.jpeg';
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
        document.querySelector('.main').style.filter = 'blur(2px)';
    }else if(computerScore === 5){
        document.querySelector('.popuptext').textContent = 'You Lose!';
        document.querySelector('.popup').style.visibility = 'visible';
        document.querySelector('.main').style.filter = 'blur(2px)';
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.popup').style.visibility = 'hidden';
    document.querySelector('.main').style.filter = 'blur(0px)';
    round.textContent = 'Choose your play';
    round.classList.remove('lose', 'win', 'tie');
    document.getElementById('playerimg').src = ' ';
    document.getElementById('computerimg').src = ' ';
    updateScore();

}

function handleClick(e) {
    const playerChoice = e.currentTarget.id;
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
