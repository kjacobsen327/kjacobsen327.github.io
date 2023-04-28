// this function is to allow the selection of the stylist and options
// when the checkmark to book an appointment for the salon is checked
// and will clear all the selections when unclicked
function unlockStylistOptions() {
    
    // get the semi-transparent blocker span elements positioned on top of the choices
    let stylistsBlocker = document.getElementById("stylistsBlocker");
    let servicesBlocker = document.getElementById("servicesBlocker");

    // set the blocker to be positioned on top of the choices if checkmark is unchecked
    stylistsBlocker.style.zIndex = "1";
    servicesBlocker.style.zIndex = "1";

    // if the checkmark is checked the blocker will be hidden behind the choices
    if (document.getElementById("salon_check").checked) {
        stylistsBlocker.style.zIndex = "-1";
        servicesBlocker.style.zIndex = "-1";
    }

    // this will clear the stylist choice when the checkmark is unchecked
    let stylistChoice = document.querySelectorAll(".stylist_choice");
        // get all intances of class="stylist_choice"
    for (let i = 0; i < stylistChoice.length; i++) {
        // remove checked option
        stylistChoice[i].checked = false;
    }

    // this will clear the service choices when the checkmark is unchecked
    let serviceChoice = document.querySelectorAll(".service_choice");
        // get all instances of class="service_choice"
    for (let i = 0; i < serviceChoice.length; i++) {
        // remove checked options
        serviceChoice[i].checked = false;
    }
}

// same function as above, just with different names
function unlockEventOptions() {

    let eventsBlocker = document.getElementById("eventsBlocker");
    let guestsBlocker = document.getElementById("guestsBlocker");

    eventsBlocker.style.zIndex = "1";
    guestsBlocker.style.zIndex = "1";

    if (document.getElementById("event_check").checked) {
        eventsBlocker.style.zIndex = "-1";
        guestsBlocker.style.zIndex = "-1";
    }

    let eventChoice = document.querySelectorAll(".event_choice");
    for (let i = 0; i < eventChoice.length; i++) {
        eventChoice[i].checked = false;
    }

    let guestChoice = document.querySelectorAll(".guest_choice");
    for (let i = 0; i < guestChoice.length; i++) {
        guestChoice[i].checked = false;
    }
}