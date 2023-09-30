let roomLength = document.getElementById("roomLength");
let roomWidth = document.getElementById("roomWidth");
let roomHeight = document.getElementById("roomHeight");
let paintCoverage = document.getElementById("paintCoverage");
let paintCost = document.getElementById("paintCost");
const calcBtn = document.getElementById("calcBtn");

// added event listeners to change background color of input field when input is entered
roomLength.addEventListener("input", changeColor);
roomWidth.addEventListener("input", changeColor);
roomHeight.addEventListener("input", changeColor);
paintCoverage.addEventListener("input", changeColor);
paintCost.addEventListener("input", changeColor);
calcBtn.addEventListener("click", calculatePaint); // event listener for clicking the calculate button

function wallArea() {
    let length = roomLength.value;
    let width = roomWidth.value;
    let height = roomHeight.value;
    let totalArea = (2 * length * width) + (2 * width * height);
    return totalArea;
}
function gallonsNeeded() {
    let coverage = paintCoverage.value;
    return Math.ceil(wallArea() / coverage);
}

function calculatePaint() {
    let cost = paintCost.value;
    document.getElementById("paintNeeded").innerHTML = "You will need to buy " + gallonsNeeded() + " gallons of paint"
    document.getElementById("cost").innerHTML = "It will cost a total of: $" + ((gallonsNeeded() * cost).toFixed(2));
}

function changeColor() {
    this.style.backgroundColor = "lightgreen";
}