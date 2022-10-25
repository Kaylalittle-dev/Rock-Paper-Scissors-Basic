
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResults()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // or can use 3
    
    if (randomNumber === 1){
        computerhoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults(){
    if(computerChoice === userChoice){
        result = "it's a draw!"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "you won!"
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = "you lost!"
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "you lost!"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "you won!"
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = "you lost!"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "you won!"
    }
    resultDisplay.innerHTML = result
}