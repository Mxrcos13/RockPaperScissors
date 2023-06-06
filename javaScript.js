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
                    return "Tie! Rock and rock";
                case "paper":
                    return "You lose! Paper beats rock";
                case "scissors":
                    return "You win! Rock beats scissors";
            }
        case "paper":
            switch(computerChoice){
                case "rock":
                    return "You win! Paper beats rock";
                case "paper":
                    return "Tie! Paper and paper";
                case "scissors":
                    return "You lose! Scissors beats paper";
            }
        case "scissors":
            switch(computerChoice){
                case "rock":
                    return "You lose! Rock beats scissors";
                case "paper":
                    return "You Win! Scissors beats paper"
                case "scissors":
                    return "Tie! scissors and scissors";
            }
        default:
            return "Incorrect Input";
    }
}

function handleClick(e) {
    const playerChoice = e.target.id;
    const result = playRound(playerChoice, getComputerChoice());
    console.log(result);
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