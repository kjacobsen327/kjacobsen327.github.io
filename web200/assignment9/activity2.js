document.getElementById("date1").addEventListener("input", getDate1);
document.getElementById("date2").addEventListener("input", getDate2);
document.getElementById("calculate").addEventListener("click", getDifference);
let date1;
let date2;

function getDate1() {
    date1 = Date.parse(document.getElementById("date1").value);
    console.log(date1);
    return date1;
}
function getDate2() {
    date2 = Date.parse(document.getElementById("date2").value);
    console.log(date2);
    return date2;
}
function getDifference() {
    let oneDay = 1000 * 60 * 60 * 24;
    let getDays = (date2 - date1) / oneDay;
    if (getDays < 0) {
        getDays = getDays * -1;
    }
    let getYears = (getDays / 365).toFixed(2);
    let getMonths = (getYears * 12).toFixed(2);

    document.getElementById("output").innerHTML = "The difference between these two dates is: " + "<br>" + getDays + " days<br>or " + getMonths + " months<br>or " + getYears + " years";
}