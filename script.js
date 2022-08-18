//First Function. It gets a random choice from the computer 
//and returns it
function TestsFunction() {
    var T = document.getElementById("game");
    var B = document.getElementById("play");
    T.style.display = "flex";  // <-- Set it to block
    B.style.display = "none";
}

function getComputerChoice(){
    const options = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

let playerRoundsWon = 0, compRoundsWon = 0;
let result;
const container = document.querySelector('#container');
const results = document.createElement('div');
const points = document.createElement('div');
container.appendChild(points);
container.appendChild(results);
const rock = document.getElementById("rock");
const buttons = document.querySelectorAll('button');


function playRound (playerSelection, computerSelection){

    let fixedPlayerSelection = playerSelection.toLowerCase()
    
    if (fixedPlayerSelection === "rock" && computerSelection === "Rock" ||
        fixedPlayerSelection === "paper" && computerSelection === "Paper" ||
        fixedPlayerSelection === "scissors" && computerSelection === "Scissors"){
        return 'tie'
    }
    if (fixedPlayerSelection === "rock"){
        if (computerSelection === "Paper"){
            return 'lose'
        }
        else if(computerSelection === "Scissors"){
            return 'win'
        }
    }
    if (fixedPlayerSelection === "paper"){
        if (computerSelection === "Scissors"){
            return 'lose'
        }
        else if(computerSelection === "Rock"){
            return 'win'
        }
    }
    if (fixedPlayerSelection === "scissors"){
        if (computerSelection === "Rock"){
            return 'lose'
        }
        else if(computerSelection === "Paper"){
            return 'win'
        }
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
    //return 'Invalid result'
}
let pcResult;

  buttons.forEach((button) => {

    button.addEventListener('click', () => {
        pcResult = getComputerChoice();
        result = playRound(button.id,pcResult);
        results.classList.add('results');
        
        if(playerRoundsWon !== 5 && compRoundsWon !== 5){

            if(result === 'win'){

                playerRoundsWon++;

                if(playerRoundsWon === 5)
                {
                    alert("Congratulations! You Won")
                }
            }
            else if(result === 'lose'){

                compRoundsWon++;

                if(compRoundsWon === 5){
        
                    alert("You lost :(")
                }
            }
            results.textContent = getMessageFromResult(result,button.id,pcResult);
            points.textContent = `Your points:  ${playerRoundsWon} ` 
            + `Computer points:  ${compRoundsWon} `;
       
        }
          
    });
   
  });


 