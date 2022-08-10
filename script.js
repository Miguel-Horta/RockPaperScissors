//First Function. It gets a random choice from the computer 
//and returns it

function getComputerChoice(){
    const options = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

let index = "tie"
let playerRoundsWon = 0
let compRoundsWon = 0
function playRound (playerSelection, computerSelection){

    let loser, winner
    let fixedPlayerSelection = playerSelection.toLowerCase()
    
    if (fixedPlayerSelection === "rock" && computerSelection === "Rock" ||
        fixedPlayerSelection === "paper" && computerSelection === "Paper" ||
        fixedPlayerSelection === "scissors" && computerSelection === "Scissors"){
        const tie = "It's a tie, try again"
        index = "tie"
        return tie 
    }
    if (fixedPlayerSelection === "rock"){
        if (computerSelection === "Paper"){
            loser = "You lose, paper beats rock"
            index = "lose"
            return loser
        }
        else if(computerSelection === "Scissors"){
            winner = "You win! rock beats scissors"
            index = "win"
            return winner
        }
    }
    if (fixedPlayerSelection === "paper"){
        if (computerSelection === "Scissors"){
            loser = "You lose, scissors cut paper"
            index = "lose"
            return loser
        }
        else if(computerSelection === "Rock"){
            winner = "You win! paper beats rock"
            index = "win"
            return winner
        }
    }
    if (fixedPlayerSelection === "scissors"){
        if (computerSelection === "Rock"){
            loser = "You lose, rock beats scissors"
            index = "lose"
            return loser
        }
        else if(computerSelection === "Paper"){
            winner = "You win! scissors cut paper"
            index = "win"
            return winner
        }
    }
}

function game(){
    for(let i = 0; i<5; i++){
        const compChoice = getComputerChoice()
        const playerinput = prompt("Write rock, paper or scissors")
        const round1 = playRound(playerinput,compChoice)
        console.log(round1)
        
        if(index === "win"){
            playerRoundsWon++
        }
        else if (index === "lose"){
            compRoundsWon++
        }
        else if(index === "tie"){
            i--
        }
        console.log(`Your points:  ${playerRoundsWon} `)
        console.log(`Computer points:  ${compRoundsWon} `)
    }
    if (playerRoundsWon > compRoundsWon){
        alert("Congratulations! You Won")
    }
    else {
        alert("You lost :(")
    }

}

const play = game();