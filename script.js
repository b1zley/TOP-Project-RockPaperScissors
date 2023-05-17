

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3);

    switch (compChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";

    }
}
function capitalizePlayer(playerSelection) {
    firstLetterPlayerSelection = playerSelection.charAt(0).toUpperCase();
    restOfPlayerSelection = playerSelection.substring(1).toLowerCase();
    return playerSelection = firstLetterPlayerSelection + restOfPlayerSelection;
}


function playRound(playerSelection, computerSelection) {
    capitalizedPlayerSelection = capitalizePlayer(playerSelection);

    youWinMessage = "You Win! " + capitalizedPlayerSelection + " beats " + computerSelection;
    youLoseMessage = "You lose! " + computerSelection + " beats " + capitalizedPlayerSelection;
    youDrawMessage = "You chose: " + capitalizedPlayerSelection + "! Computer chose: " +
        computerSelection + "! Draw!";
    
    if (capitalizedPlayerSelection == "Rock") {
        switch (computerSelection) {
            case "Rock":
                return youDrawMessage;

            case "Paper":
                return youLoseMessage;

            case "Scissors":
                return youWinMessage;

        }
    } else if (capitalizedPlayerSelection == "Paper") {
        switch (computerSelection) {
            case "Rock":
                return youWinMessage;

            case "Paper":
                return youDrawMessage;

            case "Scissors":
                return youLoseMessage;

        }
    } else if (capitalizedPlayerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                return youLoseMessage;
            case "Paper":
                return youWinMessage;
            case "Scissors":
                return youDrawMessage;
        }
    }
    


}

function getUserInput(){
    return prompt("Rock Paper Scissors SHOOT!");
}

function game(){
    for(i=0 ; i < 5 ; i++){
        console.log(playRound(getUserInput(),getComputerChoice()))
    }
}