document.getElementById("addBook").addEventListener("click", collectInfo);
document.getElementById("addBook").addEventListener("click", createBook);
document.getElementById("displayAPA").addEventListener("click", displayAPA);
document.getElementById("displayMLA").addEventListener("click", displayMLA);


function collectInfo() {
bookTitle = document.getElementById("title").value;
lastName = document.getElementById("lName").value;
firstName = document.getElementById("fName").value;
midInitial = (document.getElementById("mInitial").value).toUpperCase();
year = parseInt(document.getElementById("year").value);
city = document.getElementById("city").value;
state = document.getElementById("state").value;
publisher = document.getElementById("publisher").value;
}

let book = {};
function createBook() {
    book = {
        title: bookTitle,
        lName: lastName,
        fName: firstName,
        mInitial: midInitial,
        year: year,
        city: city,
        state: state,
        publisher: publisher,
        apaFormat: function () {
            return this.lName + ", " + this.fName[0] + ". " + this.mInitial + ". (" + this.year + ") " + this.title + ". "
                + this.city + ", " + this.state + ": " + this.publisher + ".";
        },
        mlaFormat: function () {
            return this.lName + ", " + this.fName + ". " + this.mInitial + ". " + this.title + ". " + this.publisher + ", "
                + this.year + ".";
        }
    }
}

let apaList = document.getElementById("apa");
let mlaList = document.getElementById("mla");

function displayAPA() {
    apaList.innerHTML = book.apaFormat();
    mlaList.innerHTML = "";
}
function displayMLA() {
    mla.innerHTML = book.mlaFormat();
    apaList.innerHTML = "";
}