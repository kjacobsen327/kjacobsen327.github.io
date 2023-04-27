

function unlockStylistOptions() {

    let unlockStylists = document.getElementById("stylist_options");
    let stylistsBlocker = document.getElementById("stylistsBlocker");
    let servicesBlocker = document.getElementById("servicesBlocker");

    var serviceCheck = document.querySelectorAll(".serviceCheck");
    for (var i = 0; i < serviceCheck.length; i++) {
        serviceCheck[i].checked = false;
    }
    stylistsBlocker.style.zIndex = "1";
    servicesBlocker.style.zIndex = "1";

    if (document.getElementById("salon_check").checked) {
        // unlockStylists.style.display = "block";
        stylistsBlocker.style.zIndex = "-1";
        servicesBlocker.style.zIndex = "-1";
    }
    else {
        // unlockStylists.style.display = "none";

document.getElementById("service_1").checked = false;

    }
}

function unlockEventOptions() {

    let unlockEvents = document.getElementById("event_options");
    let eventsBlocker = document.getElementById("eventsBlocker");
    let guestsBlocker = document.getElementById("guestsBlocker");

    var guestCheck = document.querySelectorAll(".guestCheck");
    for (var i = 0; i < guestCheck.length; i++) {
        guestCheck[i].checked = false;
    }
    eventsBlocker.style.zIndex = "1";
    guestsBlocker.style.zIndex = "1";

    if (document.getElementById("event_check").checked) {
        unlockEvents.style.display = "block";
        eventsBlocker.style.zIndex = "-1";
        guestsBlocker.style.zIndex = "-1";
    }
    else {
        unlockEvents.style.display = "none";
    }
}
