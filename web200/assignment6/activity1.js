document.getElementById("calcBtn").addEventListener("click", multiplyInput);

function multiplyInput() {
    let value = document.getElementById("inputValue").value;
    let expressions = document.getElementById("inputExpressions").value;
    let text = document.getElementById("result");
    text.innerHTML = ""; //to clear the previous results if new input is entered
    let i = 1;
    while (i <= expressions) {
        let result = value * i;
        text.innerHTML += "<p>" + value + " * " + i + " = " + result + "</p>";
        i++;
    }
}