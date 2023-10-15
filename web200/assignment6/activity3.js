document.getElementById("addGrade").addEventListener("click", createInput);
document.getElementById("removeGrade").addEventListener("click", removeInput);
document.getElementById("calcBtn").addEventListener("click", getAverage);

let inputBoxes = 1;

//I learned how to create an input box and add it to a parent element
//https://stackoverflow.com/questions/5656392/how-to-create-input-type-text-dynamically
function createInput() {
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "grade");
  input.setAttribute("value", "undefined");
  let parent = document.getElementById("inputContainer");
  parent.appendChild(input);
  inputBoxes++;
}
//And learned how to remove it
function removeInput() {
  let parent = document.getElementById("inputContainer");
  parent.removeChild(parent.lastElementChild);
  inputBoxes--;
}

//Use a while loop to get all the values of the input boxes
function getSum() {
  let array = document.getElementsByName("grade");
  let total = 0;
  let i = 0;

  do {
    parseInt(array[i].value);
    total += parseInt(array[i].value);
    i++;
  } while (i < array.length);
  return total;
}

function getAverage() {
  let average = getSum() / inputBoxes;
  if (!isNaN(average)) {
    document.getElementById("averageGrade").innerHTML = "The average grade is: " + average.toFixed(2);
  }
  else {
    document.getElementById("averageGrade").innerHTML = "Please enter a number in each box";
  }
}