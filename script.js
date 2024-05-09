
function getComputerChoice () {
    let num = Math.floor(Math.random() * 3)
    let choice = null
    console.log(num)

    if (num === 0){
        choice = "rock"
    } else if (num === 1 ){
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice() {
    let choice = prompt("rock,paper, or scissors?")
    return choice
}



function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a Draw!")
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You WIN! Rock beats Scissors")
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You WIN! Paper beats Rock")
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You WIN! Scissors beats Paper")
            humanScore++
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You LOSE! Rock beats Scissors")
            computerScore++
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You LOSE! Paper beats Rock")    
            computerScore++
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You LOSE! Scissors beats Paper")
            computerScore++
        }
        
    }
    for (let i = 0; i < 5; i++) {
        const computerSelection  =  getComputerChoice()
        const humanSelection = getHumanChoice().toLowerCase()
        switch(humanSelection) {
            case "rock":
            case "paper":
            case "scissors":
                break;
            default:
                console.log("Please key in either rock, paper, or scissors.")
                i--
        }
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        console.log(`Congratulations! You WIN by a score of ${humanScore} to ${computerScore}!`)
    } else if (computerScore > humanScore) {
        console.log(`You LOSE. You lost by a score of ${computerScore} to ${humanScore}.`)
    } else {
        console.log(`It's a DRAW. You got ${humanScore} points.`)
    }
}

playGame();