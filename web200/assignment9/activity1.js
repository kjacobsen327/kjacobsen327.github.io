window.addEventListener("load", currentTime);

function currentTime() {
    let now = new Date();
    let formatDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = formatDay[now.getDay()];
    let formatMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = formatMonth[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    amPM = "";
    formatHours();
    formatMinutes();
    formatSeconds();

    function formatHours() {
        if (now.getHours() == 0) {
            hours = 12;
            amPM = "AM"
        }
        else if (now.getHours() > 0, now.getHours() < 12) {
            hours = hours;
            amPM = "AM";
        }
        else if (now.getHours() > 12)
            hours = hours - 12;
        amPM = "PM";
    }

    function formatMinutes() {
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    }
    function formatSeconds() {
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    }

    let clock = document.getElementById("clock");
    clock.innerHTML = "The current date is: " + day + " " + month + " " + date + ", " + year + "<br> The current time is: " + hours + ":" + minutes + ":" + seconds + " " + amPM;

    setTimeout("currentTime()", 1000);
}