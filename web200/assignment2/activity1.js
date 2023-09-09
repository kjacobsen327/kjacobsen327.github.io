let payAnswer = prompt("What is your hourly pay?");
let hourlyRate = parseFloat(payAnswer);
if (Number.isNaN(hourlyRate)) {
    alert("Sorry, must enter a number")
}

let hoursAnswer = prompt("How many hours did you work during the 2 week pay period?");
let hoursWorked = parseFloat(hoursAnswer);
if (Number.isNaN(hoursWorked)) {
    alert("Sorry, must enter a number")
}

document.getElementById("biweeklyPay").innerHTML = ("$" + (hourlyRate * hoursWorked).toFixed(2));
document.getElementById("monthlyPay").innerHTML = ("$" + (hourlyRate * hoursWorked * 2).toFixed(2));
document.getElementById("annualPay").innerHTML = ("$" + (hourlyRate * hoursWorked * 26).toFixed(2));
/*
I kept getting a result with a bunch of extra decimals after the number,
I found out it has something to do with using float numbers, and you can round the decimal
places using .toFixed()
*/