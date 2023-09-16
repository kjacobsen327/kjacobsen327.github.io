function wallArea() {
    let roomLength = document.getElementById("roomLength").value;
    let roomWidth = document.getElementById("roomWidth").value;
    let roomHeight = document.getElementById("roomHeight").value;
    let totalArea = (2 * roomLength * roomHeight) + (2 * roomWidth * roomHeight);
    return totalArea;
}
function gallonsNeeded() {
    let paintCoverage = document.getElementById("paintCoverage").value;
    return Math.ceil(wallArea() / paintCoverage);
}

function calculatePaint () {
    let cost = document.getElementById("paintCost").value;
    document.getElementById("paintNeeded").innerHTML = "You will need to buy " + gallonsNeeded() + " gallons of paint"
    document.getElementById("cost").innerHTML = "It will cost a total of: $" + ((gallonsNeeded() * cost).toFixed(2));
}