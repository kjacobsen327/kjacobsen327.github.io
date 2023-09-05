window.alert("The first way to generate output: Hello, my name is Kevin!");


document.write("The second way: Hello, Kevin!");

let greeting = "Hello, ";
let myName = "Kevin!!!";
document.write("<p>");
document.write("A third way: " + greeting + myName);
document.write("</p>");

document.getElementById("myName").innerText = "This is actually the fourth way: I am changing the text of the <p> element";

console.log("Hello! My name is Kevin!");