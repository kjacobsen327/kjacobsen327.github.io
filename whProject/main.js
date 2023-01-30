var Command_Points = 0;
var Command_PointsElement = document.getElementById("Command_Points");
var Command_PointsStorage = localStorage.getItem("Command_Points");
var Victory_Points = 0;
var Victory_PointsElement = document.getElementById("Victory_Points");
var Victory_PointsStorage = localStorage.getItem("Victory_Points");

if (Command_PointsStorage) {
  Command_Points = parseInt(Command_PointsStorage);
  Command_PointsElement.innerHTML = Command_Points;
}
if (Victory_PointsStorage) {
  Victory_Points = parseInt(Victory_PointsStorage);
  Victory_PointsElement.innerHTML = Victory_Points;
}

function subtractCommand_Points() {
  Command_Points--;
  Command_PointsElement.innerHTML = Command_Points;
  localStorage.setItem("Command_Points", Command_Points);
}
function addCommand_Points() {
  Command_Points++;
  Command_PointsElement.innerHTML = Command_Points;
  localStorage.setItem("Command_Points", Command_Points);
}
function subtractVictory_Points() {
  Victory_Points--;
  Victory_PointsElement.innerHTML = Victory_Points;
  localStorage.setItem("Victory_Points", Victory_Points);
}
function addVictory_Points() {
  Victory_Points++;
  Victory_PointsElement.innerHTML = Victory_Points;
  localStorage.setItem("Victory_Points", Victory_Points);
}


function resetScore() {
  Command_Points = 0;
  Command_PointsElement.innerHTML = Command_Points;
  localStorage.setItem("Command_Points", Command_Points);
  Victory_Points = 0;
  Victory_PointsElement.innerHTML = Victory_Points;
  localStorage.setItem("Victory_Points", Victory_Points);
}

//Expanding Button Script//
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

//Battleplan Buttons Sript//
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
  
  function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }