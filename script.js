//Elements 
const scoreEl = document.getElementById("score-el")
const highScoreEl = document.getElementById("high-score-el")
const userInput = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const feedEl = document.getElementById("feed-el")

//Generate a random value between 1 and 100, inclusive
const randomNumber = () => {
    return Math.trunc((Math.random() * 100) + 1)
}

let myNumber = randomNumber()
let currentScore = 10
let highScore = 0

console.log("mynumber:",myNumber)
//Default values of current score and high score
scoreEl.innerHTML = currentScore
highScoreEl.textContent = highScore

//Checks if the userInput number is in Range
const inRange = function(number){
    // console.log(number)
    if(number >=1 && number <=100){
        return true
    }else{
        return false
    }
}

//keeps track of the user input and validates
userInput.addEventListener('keyup',(input) =>{
    //as user presse the key value is tracked here
    // console.log(input.target.value)
    if(!inRange(input.target.value)){
        userInput.value = ""
        feedEl.textContent = "You can only enter numbers between 1 and 100"
    }
})

//Main Game

//gives hints to the user
const lowOrHigh = (number) => {
    const div = number / myNumber
    console.log(div)
    if(div < 0.5){
        feedEl.textContent = "Your Guess is too low"
    }else if(div == 0.5){
        feedEl.textContent = "You are geeting there, but it's still low."
    }else if(div < 1 && div > 0.5){
        feedEl.textContent = "Closer, but not there, go higher"
    }else if(div > 1 && div < 1.5){
        feedEl.textContent = "Your number is high"
    }else{
        feedEl.textContent = "Too High, lower down"
    }
}

//compare the user and my number,
//and determines if they are equal
const compareNumber = (number) => {
    if(number === myNumber){
        feedEl.textContent = "You guess the correct number" 
        highScoreEl.textContent = currentScore
        highScore = currentScore
    }else{
        currentScore--
        scoreEl.textContent = currentScore
        lowOrHigh(number)
    }
}


const ifNotEmpty = () =>{
    const number = Number(userInput.value)
    if(number !== ""){
        compareNumber(number)
    }else{
        feedEl.textContent = "The input box is empty. Enter a number between 1 and 100."
    }
}


checkBtn.addEventListener('click',ifNotEmpty());



// checkBtn.addEventListener('click', ifNotEmpty(userInput.value))


