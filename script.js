//First Function. It gets a random choice from the computer 
//and returns it

function TestsFunction() {
    var T = document.getElementById("game");
    var B = document.getElementById("play");
    T.style.display = "flex";  // <-- Set it to block
    B.style.display = "none";
}

function getComputerChoice(){
    const options = ["rock","paper","scissors"]
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

let playerRoundsWon = 0, compRoundsWon = 0;
const userPoints = document.getElementById('userpoints');
const compPoints = document.getElementById('computerpoints');
const container = document.querySelector('#container');
const results = document.createElement('div');
const points = document.createElement('div');
const buttons = document.querySelectorAll('button');
container.appendChild(points);
container.appendChild(results);
results.classList.add('results');

function displayWinner(didUserWin){
    const res = didUserWin ? "Congratulations! You Won" : "You lost :(";
    setTimeout(() => {
        alert(res);
        const playAgain = confirm("Do you want to play again?");
        if(playAgain === true){
            playerRoundsWon = 0;
            compRoundsWon = 0;
            userPoints.innerHTML = playerRoundsWon;
            compPoints.innerHTML = compRoundsWon;
            results.textContent = "";
    }
    },0);
}

function playRound (playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        return 'tie'
    }
    if((playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")){
        return 'lose';
    }
    else {
        return 'win';
    }

}

function getMessageFromResult(result, playerChoice, compChoice){
    if (result === "tie") {
        return `It's a tie, both chose ${playerChoice}`
    } else if (result === "lose") {
        return `You lose this round, ${compChoice} beats ${playerChoice}`
    } else if (result === "win") {
        return `You win this round, ${playerChoice} beats ${compChoice}`
    }
}

  buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const pcResult = getComputerChoice();
        const result = playRound(button.id,pcResult);
        
        if(playerRoundsWon !== 5 && compRoundsWon !== 5){

            if(result === 'win'){
                playerRoundsWon++;
            }
            else if(result === 'lose'){
                compRoundsWon++;
            }
            results.textContent = getMessageFromResult(result,button.id,pcResult);
            userPoints.textContent = playerRoundsWon;
            compPoints.textContent = compRoundsWon;
            
            if(playerRoundsWon === 5){
                displayWinner(true);
            }
            if(compRoundsWon === 5){
                displayWinner(false);
            }
        }        
    });
  });