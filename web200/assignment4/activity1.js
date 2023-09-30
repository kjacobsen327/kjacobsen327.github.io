const calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", calculatePay);

// both input boxes will update the paycheck if changed.
hours = document.getElementById("hoursWorked");
hours.addEventListener("change", calculatePay);

wage = document.getElementById("hourlyPay");
wage.addEventListener("change", calculatePay);


function getHours() {
    let hours = document.getElementById("hoursWorked").value;
    return hours;
}
function getWage() {
    let wage = document.getElementById("hourlyPay").value;
    return wage;
}
function calculatePay() {
    let paycheck = getHours() * getWage();
    document.getElementById("result").innerHTML = "$" + paycheck.toFixed(2);
}