window.addEventListener("load", hideInput);

document.getElementById("weekly").addEventListener("click", toggleInput);
document.getElementById("biweekly").addEventListener("click", toggleInput);
document.getElementById("weekly").addEventListener("change", calculatePay);

document.getElementById("biweekly").addEventListener("change", calculatePay);


let inputHours1 = document.getElementById("inputHours1").value;
let inputHours2 = document.getElementById("inputHours2").value;
// both input boxes will update the paycheck if changed.
document.getElementById("inputHours1").addEventListener("input", calculatePay);
document.getElementById("inputHours2").addEventListener("input", calculatePay);
document.getElementById("inputWage").addEventListener("input", calculatePay);

hours1Display = document.getElementById("week1Hours");
hours2Display = document.getElementById("week2Hours");
wageDisplay = document.getElementById("wage");

function hideInput() {
    hours1Display.style.display = "none";
    hours2Display.style.display = "none";
    wageDisplay.style.display = "none";
}

function toggleInput() {
    let payPeriods = getPaySelection();

    if (payPeriods == 1) {
        hours1Display.style.display = "block";
        document.getElementById("weeklyBtn").style.backgroundColor = "#4fa950";
        document.getElementById("biweeklyBtn").style.backgroundColor = "#4b8d4c";

        document.getElementById("textForWeek1").innerHTML = "Enter hours worked:";

        hours2Display.style.display = "none";

        // to reset the 2nd input and recalculate the pay if user changes from biweekly back to weekly
        new function clearWeek2() {
        document.getElementById("inputHours2").value = undefined;
        calculatePay();
        }
        
    }
    else if (payPeriods == 2) {
        hours1Display.style.display = "block";
        document.getElementById("weeklyBtn").style.backgroundColor = "#4b8d4c";

        document.getElementById("textForWeek1").innerHTML = "Enter hours worked for week 1:";
        hours2Display.style.display = "block";
        document.getElementById("biweeklyBtn").style.backgroundColor = "#4fa950";

    }
    wageDisplay.style.display = "block";
}

function getPaySelection() {
    if (document.getElementById("weekly").checked == true) {
        return 1;
    }
    else if (document.getElementById("biweekly").checked == true) {
        return 2;
    }
}


function getInput() {
    let inputHours1 = document.getElementById("inputHours1").value;
    let inputHours2 = document.getElementById("inputHours2").value;
    let wage = document.getElementById("inputWage").value;
    let overtimePay = wage * 1.5;

    let pay = undefined;


    // will display an error message if user enters a negative number
    let msg = document.getElementById("errorMsg");
        msg.style.display = "none";
    if ( isNaN(inputHours1 || inputHours2) || inputHours1 < 0 || inputHours2 < 0 || wage < 0) {
        msg.innerHTML = "Please enter only positive numbers into the input box";
        msg.style.display = "block";
        msg.style.color = "red";
    }
    else if (inputHours1 > 40 && inputHours2 > 40) {
        pay = (((inputHours1 - 40) * overtimePay) + (40 * wage)) + (((inputHours2 - 40) * overtimePay) + (40 * wage));
        return pay;
    }
    else if (inputHours1 > 40 && inputHours2 <= 40) {
        pay = (((inputHours1 - 40) * overtimePay) + (40 * wage)) + (inputHours2 * wage);
        return pay;
    }
    else if (inputHours1 <= 40 && inputHours2 > 40) {
        pay = (inputHours1 * wage) + (((inputHours2 - 40) * overtimePay) + (40 * wage));
        return pay;
    }
    else {
    pay = (inputHours1 * wage) + (inputHours2 * wage);
    return pay;
}
}
function calculatePaychecks() {
    let yearlyPaychecks = getPaySelection();
    if (yearlyPaychecks == 1) {
        return yearlyPaychecks = 52;
    }
    else {
        return yearlyPaychecks = 26;
    }
    }


function calculatePay() {
    // gets the value of pay from the getInput() function.
    let paycheck = getInput();
    let yearlyPaychecks = calculatePaychecks();
    let millionaire = 1000000 / (paycheck * yearlyPaychecks);

    // won't display paycheck if it is not a number, or equal to 0
    if (isNaN(paycheck) || paycheck == 0) {
        document.getElementById("resultNumber").innerHTML = "";
        document.getElementById("millionaire").innerHTML = "";
    }
    else {
        paycheckFormatted = paycheck.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        
        //found a fix to add the comma to any number over 1,000, and also set the decimal places to 2.
        //I kept having issues with the paycheck coming out to something like $100.1 which looked weird.

        document.getElementById("resultNumber").innerHTML = "Your paycheck will be: $" + paycheckFormatted;
        document.getElementById("resultNumber").style.borderTop = "4px solid #000";
        document.getElementById("millionaire").innerHTML = "If you don't spend a single penny, at this rate it will take " + millionaire.toFixed(1) + " years till you are a millionaire!"
    }
}
