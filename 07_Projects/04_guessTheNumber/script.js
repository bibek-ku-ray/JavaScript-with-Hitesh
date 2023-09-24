let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#submit')
const uesrInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(uesrInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }
    else if(guess < 1){
        alert('Please enter number greater then 1')
    }
    else if(guess > 100){
        alert('Please enter number lesser  than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } 
    else if(guess < randomNumber){
        displayMessage(`Number is tooo low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess){
    uesrInput.value = ''
    guesSlot.innerHTML += `${guess} `
    numGuess++  
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
   const newGameBtn = document.querySelector('#newGame')
   newGameBtn.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    guesSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    uesrInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   })
}

function endGame(){
    uesrInput.value = ''
    uesrInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}