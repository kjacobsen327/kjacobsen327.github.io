function calculatePay(){
    let hours = document.getElementById("hoursWorked").value;
    let wage = document.getElementById("hourlyPay").value;
    let paycheck = hours * wage;
    document.getElementById("result").innerHTML = "Your paycheck will be: $" + paycheck.toFixed(2);
}
