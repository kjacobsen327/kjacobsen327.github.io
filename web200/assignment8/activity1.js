document.getElementById("start").addEventListener("click", createGuess);
document.getElementById("higher").addEventListener("click", guessHigher);
document.getElementById("lower").addEventListener("click", guessLower);
document.getElementById("correct").addEventListener("click", winningMessage);

let possibleNumbers = []; //create an array that will hold the values for possible available numbers to guess, starting with 0-100
let guessedNumber;
let text = document.getElementById("guessText"); //this will be the text that appears for the guess
let num = document.getElementById("num");
num.style.display = "none"

let guessCounter = 1; //to track how many guesses it takes the computer to figure out your number
document.getElementById("buttons").style.display = "none";

function createGuess() {
    for (let i = 0; i <= 100; i++) {
        possibleNumbers.push(i);
    }
    let min = possibleNumbers[0];
    let max = possibleNumbers[possibleNumbers.length - 1];
    guessedNumber = Math.floor(Math.random() * (max - min + 1) + min); //computer guesses a random number from the array, 0-100
    text.innerHTML = "I guess your number is: ";
    document.getElementById("intro").style.display = "none";
    document.getElementById("start").style.display = "none";
    num.style.display = "flex";
    num.innerHTML = guessedNumber;
    document.getElementById("buttons").style.display = "flex";
}

function guessHigher() {
    let index = possibleNumbers.indexOf(guessedNumber); //get the index value of the number guessed
    possibleNumbers.splice(0, index + 1); //splice array, removing the first index value up to the number guessed so that those numbers are no longer an option to guess
    let min = possibleNumbers[0];
    let max = possibleNumbers[possibleNumbers.length - 1];
    guessedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    text.innerHTML = "I guess your number is: ";

    if (isNaN(guessedNumber)) {
        num.innerHTML = "Hey you're cheating!";
    }
    else {
        num.innerHTML = guessedNumber;
        guessCounter++;
    }
}

function guessLower() {
    let index = possibleNumbers.indexOf(guessedNumber);
    possibleNumbers.splice(index, possibleNumbers.length - 1); //splice array, removing the values of the array starting from the index value of the number guessed to the last index value
    let min = possibleNumbers[0];
    let max = possibleNumbers[possibleNumbers.length - 1];
    guessedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    text.innerHTML = "I guess your number is: ";
    if (isNaN(guessedNumber)) {
        num.innerHTML = "Hey you're cheating!";
    }
    else {
        num.innerHTML = guessedNumber;
        guessCounter++;
    }
}
function winningMessage() {
    text.style.display = "none";
    document.getElementById("winningMessage").innerHTML = "I knew it was " + guessedNumber + "!\n It only took me " + guessCounter + " guesses.";
    num.innerHTML = "";
}

