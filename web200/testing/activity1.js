let a = document.getElementById("hoursWorked");
let b = document.getElementById("hourlyPay");

function calculatePay(){
    let paycheck = a.value * b.value;
    document.getElementById("result").innerHTML = "Your paycheck will be: $" + paycheck.toFixed(2);
}
