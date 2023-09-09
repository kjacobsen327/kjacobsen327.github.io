let milesInput = prompt("Please enter a number of miles");
let miles = parseFloat(milesInput);
if (Number.isNaN(miles)) {
    alert("Sorry, must enter a number")
}

let yards = miles * 1760;
formattedYards = yards.toLocaleString("en-US");
let feet = yards * 3;
formattedFeet = feet.toLocaleString("en-US");
let inches = feet * 12;
formattedInches = inches.toLocaleString("en-US");
/*
I found this page:
https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.
in order to help me figure out how to add commas to the output number.
*/
document.getElementById("userInput").innerHTML = miles + " miles is equal to:";
document.getElementById("yardsOutput").innerHTML = formattedYards + " yards.";
document.getElementById("feetOutput").innerHTML = formattedFeet + " feet.";
document.getElementById("inchesOutput").innerHTML = formattedInches + " inches.";