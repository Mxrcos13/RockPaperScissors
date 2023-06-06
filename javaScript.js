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
function playRound(playerChoice, computerChoice){

    const round = document.querySelector('.round');
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
                    break;
                case "scissors":
                    round.textContent = "You Win! Rock beats Scissors";
                    round.classList.add('win');
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    round.textContent= 'You Win! Paper beats Rock';
                    round.classList.add("win");
                    break;
                case "paper":
                    round.textContent = 'Tie! Paper and Paper';
                    round.classList.add('tie');
                    break;
                case "scissors":
                    round.textContent = 'You Lose! Scissors beats Paper';
                    round.classList.add('lose');
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                   round.textContent = 'You Lose! Rock beats Scissors';
                   round.classList.add('lose');
                   break;
                case "paper":
                    round.textContent = 'You Win! Scissors beats Paper';
                    round.classList.add('win');
                    break;
                case "scissors":
                    round.textContent = 'Tie! Scissors and Scissors';
                    round.classList.add('tie');
                    break;
            }
            break;
        default:
            
    }
}

function handleClick(e) {
    const playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice());
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", handleClick);
paperButton.addEventListener("click", handleClick);
scissorsButton.addEventListener("click", handleClick);




/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore< 5 && computerScore < 5){
        result = playRound(prompt(),getComputerChoice());
        console.log(result);
        if(result.toLowerCase().includes("win")){
            playerScore++;
        }else if(result.toLowerCase().includes("lose")){
            computerScore++;
        }else{

        }
        console.log("Score : Your Score " + playerScore + " Computer Score : " + computerScore);
        if(playerScore === 5){
            console.log("You Win!")
        }else if(computerScore == 5){
            console.log("You Lose :(");
        }
    }

}
game();
*/