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
    
    switch(playerChoice.toLowerCase()){
        case "rock":
            switch(computerChoice){
                case "rock":
                    return 0;
                case "paper":
                    return -1
                case "scissors":
                    return 1;
            }
        case "paper":
            switch(computerChoice){
                case "rock":
                    return 1;
                case "paper":
                    return 0;
                case "scissors":
                    return -1;
            }
        case "scissors":
            switch(computerChoice){
                case "rock":
                    return -1;
                case "paper":
                    return 1;
                case "scissors":
                    return 0;
            }
        default:
            return -2;
    }
}

const round = document.querySelector('.round');

function handleClick(e) {
    const playerChoice = e.target.id;
    const result = playRound(playerChoice, getComputerChoice());
    console.log(result);
    round.classList.remove('lose', 'win', 'tie');
    switch(result){
        case -1:
            round.textContent = 'You Lose!';
            round.classList.add('lose');
            break;
        case 0:
            round.textContent = 'Tie!';
            round.classList.add('tie');
            break;
        case 1:
            round.textContent= 'You Win!';
            round.classList.add('win');
            break;
    }
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