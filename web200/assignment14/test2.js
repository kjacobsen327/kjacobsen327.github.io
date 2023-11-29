// This program demonstrates JavaScript AJAX and JSON.
//
// References:
//   https://en.wikibooks.org/wiki/JavaScript
//   https://jsonplaceholder.typicode.com

"use strict";

function User(
  name=null, 
  username=null, 
  email=null, 
  address=null, 
  phone=null, 
  website=null,
  company=null) {
  this.name = name;
  this.username = username;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.website = website;
  this.company = company;
}

function Address(street=null, suite=null, city=null, zipcode=null, geolocation=null) {
  this.street = street;
  this.suite = suite;
  this.city = city;
  this.zipcode = zipcode;
  this.geo = geolocation;
}

function Geolocation(latitude=null, longitude=null) {
  this.lat = latitude;
  this.lng = longitude;
}

function Company(name=null, catchPhrase=null, bs=null) {
  this.name = name;
  this.catchPhrase = catchPhrase;
  this.bs = bs;
}

window.addEventListener("load", function () {
  document.getElementById("get").addEventListener("focus", getFocus);
  document.getElementById("post").addEventListener("focus", postFocus);
  document.getElementById("put").addEventListener("focus", putFocus);
  document.getElementById("delete").addEventListener("focus", deleteFocus);

  document.getElementById("get").addEventListener("click", getClick);
  document.getElementById("post").addEventListener("click", postClick);
  document.getElementById("put").addEventListener("click", putClick);
  document.getElementById("delete").addEventListener("click", deleteClick);

  document.getElementById("get").focus();
});

function createUser() {
  let user = new User(
    "John Smith",
    "jsmith", 
    "jsmith@example.com",
    null, 
    "123-555-1234");

  user.address = new Address(
    "123 Any Street", 
    "Suite 1", 
    "Anytown", 
    "12345");

  user.address.geo = new Geolocation(
    -40.7831, 
    73.9712);

  user.company = new Company(
    "Dewey, Cheatem & Howe",
    "Your loss is our gain",
    "law office")

  return user;
}

function deleteClick() {
  let url = document.getElementById("url").innerText;
  let request = new XMLHttpRequest();
  request.open("DELETE", url);
  request.onload = function() {
    document.getElementById("response").innerText = "status: " + request.status + "\n";
    document.getElementById("response").innerText += "responseText:\n" + request.responseText;
  };
  request.send(null);
}

function deleteFocus() {
  document.getElementById("url").innerText = 
    "https://jsonplaceholder.typicode.com/users/11";  

  document.getElementById("data").innerText = "";
  document.getElementById("response").innerText = "";
}

function getClick() {
  let url = document.getElementById("url").innerText;
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    document.getElementById("response").innerText = "status: " + request.status + "\n";
    document.getElementById("response").innerText += "responseText:\n" + request.responseText;
  };
  request.send(null);
}

function getFocus() {
  document.getElementById("url").innerText = 
    "https://jsonplaceholder.typicode.com/users/1";
  
  document.getElementById("data").innerText = "";
  document.getElementById("response").innerText = "";
}

function postClick() {
  let url = document.getElementById("url").innerText;
  let data = document.getElementById("data").innerText;
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
    document.getElementById("response").innerText = "status: " + request.status + "\n";
    document.getElementById("response").innerText += "responseText:\n" + request.responseText;
  };
  request.send(data);
}

function postFocus() {
  document.getElementById("url").innerText = 
    "https://jsonplaceholder.typicode.com/users";

  let user = createUser();
  document.getElementById("data").innerText = JSON.stringify(user, null, 2);
  document.getElementById("response").innerText = "";
}

function putClick() {
  let url = document.getElementById("url").innerText;
  let data = document.getElementById("data").innerText;
  let request = new XMLHttpRequest();
  request.open("PUT", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
    document.getElementById("response").innerText = "status: " + request.status + "\n";
    document.getElementById("response").innerText += "responseText:\n" + request.responseText;
  };
  request.send(data);
}

function putFocus() {
  document.getElementById("url").innerText = 
    "https://jsonplaceholder.typicode.com/users/11";

  let user = {
    id: 11,
    website: "https://example.com"
  };
  document.getElementById("data").innerText = JSON.stringify(user, null, 2);
  document.getElementById("response").innerText = "";
}