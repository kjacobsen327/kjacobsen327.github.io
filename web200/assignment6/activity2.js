
document.getElementById("start").addEventListener("click", generateNumber);
document.getElementById("start").addEventListener("click", displayNumber);

document.getElementById("higher").addEventListener("click", guessHigher);
document.getElementById("lower").addEventListener("click", guessLower);

document.getElementById("correct").addEventListener("click", win);

function generateNumber() {
    let min = 0;
    let max = 100;
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}
function displayNumber() {
    document.getElementById("guess").innerHTML = randomNumber;
}

function guessHigher() {
    min = randomNumber;
    max = 100;
    higherNumber = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("guess").innerHTML = higherNumber;
    randomNumber = higherNumber;
}
function guessLower() {
    min = 0;
    max = randomNumber;
    lowerNumber = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("guess").innerHTML = lowerNumber;
    randomNumber = lowerNumber;
}
