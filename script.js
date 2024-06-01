function getComputerChoice () {
    let num = Math.floor(Math.random() * 3)
    let choice = null

    if (num === 0){
        choice = "rock"
    } else if (num === 1 ){
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    // let humanChoice = humanChoice;

    if (computerChoice == humanChoice) {
        message = `The computer also chose ${computerChoice}. It's a draw!`
    } else if (computerChoice == "rock" && humanChoice == "scissors" ||
    computerChoice == "paper" && humanChoice == "rock" ||
    computerChoice == "scissors" && humanChoice == "paper") {
        message = `You LOSE! The Computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
    } else {
        message = `You win! The Computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
    }
    ++roundsPlayed;
    return [message, humanScore, computerScore,roundsPlayed];
}

const body = document.querySelector('#body');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const results = document.querySelector('#results');
results.textContent = "Click a button to play";

const scoreboard = document.querySelector('#scoreboard');
scoreboard.setAttribute("id", "scoreboard");
scoreboard.textContent = "You 0 : 0 Computer";

function restart () {
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
    scoreboard.textContent = "You 0 : 0 Computer";
    results.textContent = "Click a button to play";
    btnRock.removeAttribute("disabled");
    btnPaper.removeAttribute("disabled");
    btnScissors.removeAttribute("disabled");
    const result = document.querySelector('#result');
    body.removeChild(result)
}

const restartBtn = document.createElement("button");
restartBtn.setAttribute("id", "restart");
restartBtn.textContent = "Restart";
restartBtn.addEventListener("click", restart)


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let round = playRound(button.getAttribute("id"))
        let humanScore = round[1];
        let computerScore = round[2];
        let message = round[0];
        let roundsPlayed = round[3];
        let finalMessage;
        results.textContent = message;
        if (roundsPlayed < 5) {
            scoreboard.textContent = `You ${humanScore} : ${computerScore} Computer`;
        } else {
            const result = document.createElement("div");
            result.setAttribute("id", "result");
            result.textContent = "FINAL SCORE";
            scoreboard.textContent = `You ${humanScore} : ${computerScore} Computer`;
            body.insertBefore(result, scoreboard)
            if (humanScore === computerScore) {
                finalMessage = "It's a draw";
            } else if (humanScore > computerScore) {
                finalMessage = "You Won!"
            } else {
                finalMessage = "You Lost!"
            }
            results.textContent = `GAME OVER! ${finalMessage}`;
            body.appendChild(restartBtn);
            btnRock.setAttribute("disabled", "disbled");
            btnPaper.setAttribute("disabled", "disbled");
            btnScissors.setAttribute("disabled", "disbled");
        }
    })
})

