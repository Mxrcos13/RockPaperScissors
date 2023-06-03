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
    }
}
console.log(playRound("rock",getComputerChoice()));