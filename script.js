//First Function. It gets a random choice from the computer 
//and returns it

function getComputerChoice(){
    const options = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

let playerRoundsWon = 0
let compRoundsWon = 0

function playRound (playerSelection, computerSelection){

    let loser, winner
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
        return `You tied, both chose ${playerChoice}`
    } else if (result === "lose") {
        return `You lose, ${compChoice} beats ${playerChoice}`
    } else if (result === "win") {
        return `You win, ${playerChoice} beats ${compChoice}`
    }
    return 'Invalid result'
}

function game(){
    for(let i = 0; i<5; i++){
        const compChoice = getComputerChoice()
        const playerinput = prompt("Write rock, paper or scissors")
        const result = playRound(playerinput,compChoice)
        const message = getMessageFromResult(result, playerinput, compChoice)
        console.log(message)
        
        
        if(result === "win"){
            playerRoundsWon++
        }
        else if (result === "lose"){
            compRoundsWon++
        }
        else if(result === "tie"){
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