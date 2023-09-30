// both input boxes will update the paycheck if changed.
hours = document.getElementById("hoursWorked");
hours.addEventListener("input", calculatePay);

wage = document.getElementById("hourlyPay");
wage.addEventListener("input", calculatePay);

window.addEventListener("load", calculatePay);


function getHours() {
    let hours = document.getElementById("hoursWorked").value;
    let msg = document.getElementById("msg1");

    if (isNaN(hours)) {
        msg.innerHTML = "Please enter a number into the input box";
        msg.style.display = "block";
        msg.style.color = "red";
    }
    else {
        msg.style.display = "none";
        return hours;
    }
}
function getWage() {
    let wage = document.getElementById("hourlyPay").value;
    return wage;
}
function calculatePay() {
    let paycheck = getHours() * getWage();
    if (isNaN(paycheck) || paycheck == 0) {
        document.getElementById("resultNumber").innerHTML = "";
    }
    else {
        document.getElementById("resultNumber").innerHTML = "Your paycheck will be: $" + paycheck.toFixed(2);
    }
    }
