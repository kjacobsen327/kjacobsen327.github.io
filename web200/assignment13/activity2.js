
let formFieldInputs = document.getElementsByTagName("input");
let fNameInput = formFieldInputs[0];
let lNameInput = formFieldInputs[1];
let addressInput = formFieldInputs[2];
let cityInput = formFieldInputs[3];
let stateInput = formFieldInputs[4];
let zipCodeInput = formFieldInputs[5];
let emailInput = formFieldInputs[6];
let phoneInput = formFieldInputs[7];
let bDayInput = formFieldInputs[8];

let submitBtn = document.getElementById("submit");

fNameInput.addEventListener("blur", toggleSubmit);
lNameInput.addEventListener("blur", toggleSubmit);
addressInput.addEventListener("blur", toggleSubmit);
cityInput.addEventListener("blur", toggleSubmit);
stateInput.addEventListener("blur", toggleSubmit);
stateInput.addEventListener("blur", toggleSubmit);
zipCodeInput.addEventListener("blur", toggleSubmit);
emailInput.addEventListener("blur", toggleSubmit);
phoneInput.addEventListener("blur", toggleSubmit);
bDayInput.addEventListener("blur", toggleSubmit);



function toggleSubmit() {
    checkNamesCityState(fNameInput);
    checkNamesCityState(lNameInput);
    checkHasInput(addressInput);
    checkNamesCityState(city);
    checkNamesCityState(stateInput);
    checkZipCode(zipCodeInput);
    checkEmail(emailInput);
    checkPhoneNumber(phoneInput);
    checkHasInput(bDayInput);
    if (checkNamesCityState(fNameInput) && checkNamesCityState(lNameInput) && checkHasInput(addressInput) && checkNamesCityState(city) && checkNamesCityState(stateInput) && checkZipCode(zipCodeInput) && checkEmail(emailInput) && checkPhoneNumber(phoneInput) && checkHasInput(bDayInput)) {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }
}

function onlyLetters(input) {
    return /^[a-zA-Z\s,-]+$/.test(input);
}
function validZipCode(input) {
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(input);
}
function validEmail(input) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input);
}
function validPhoneFormat(input) {
    return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(input);
}

function checkNamesCityState(input) {
    if (input.value == "") {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.remove("error");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return false;
    }
    else if (onlyLetters(input.value) == false) {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.add("error");
        input.parentElement.parentElement.childNodes[3].innerText = "Invalid format - no numbers or special characters";
        return false;
    }
    else {
        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("success");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return true;
    }
}
function checkHasInput(input) {
    if (input.value == "") {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.remove("error");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return false;
    }
    else {
        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("success");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return true;
    }

}
function checkZipCode(input) {
    if (input.value == "") {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.remove("error");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return false;
    }
    else if (validZipCode(input.value) == false) {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.add("error");
        input.parentElement.parentElement.childNodes[3].innerText = "Invalid format";
        return false;
    }
    else {
        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("success");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return true;
    }
}
function checkEmail(input) {
    if (input.value == "") {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.remove("error");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return false;
    }
    else if (validEmail(input.value) == false) {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.add("error");
        input.parentElement.parentElement.childNodes[3].innerText = "Invalid format";
        return false;
    }
    else {
        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("success");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return true;
    }
}
function checkPhoneNumber(input) {
    if (input.value == "") {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.remove("error");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return false;
    }
    else if (validPhoneFormat(input.value) == false) {
        input.parentElement.classList.remove("success");
        input.parentElement.classList.add("error");
        input.parentElement.parentElement.childNodes[3].innerText = "Invalid format";
        return false;
    }
    else {
        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("success");
        input.parentElement.parentElement.childNodes[3].innerText = "";
        return true;
    }
}