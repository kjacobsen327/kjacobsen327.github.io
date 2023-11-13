let tags = document.getElementsByTagName("*");
let numberOfTags = document.getElementById("numberOfTags");
let showTags = document.getElementById("showTags");

numberOfTags.innerHTML = ("There are " + tags.length + " tags on this page:");

let pageArray = [];
for (i=0; i<tags.length; i++) {
    pageArray[i] = tags[i].tagName;
}
for (i=0; i<pageArray.length; i++) {
showTags.innerText += "\n<" + pageArray[i] + ">";
}
