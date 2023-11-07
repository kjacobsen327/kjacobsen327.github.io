document.getElementById("addBook").addEventListener("click", createBook);
document.getElementById("addBook").addEventListener("click", checkInput);
document.getElementById("apa").addEventListener("click", displayBook);

function Book(title, lName, fName, mInitial) {
    this.title = title;
    this.lName = lName;
    this.year = year;
  }

let bookList = [];
function createBook() {
    let book = new {
        title: document.getElementById("title").value,
        lName: document.getElementById("lName").value,
        fName: document.getElementById("fName").value,
        mInitial: (document.getElementById("mInitial").value).toUpperCase(),
        year: parseInt(document.getElementById("year").value),
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        publisher: document.getElementById("publisher").value,
        apa: function () {
            return this.lName + ", " + this.fName[0] + ". " + this.mInitial + ". (" + this.year + ") " + this.title + ". "
                + this.city + ", " + this.state + ": " + this.publisher;
        }
    }
}
function checkInput() {
    if ((book.title, book.lName, book.fName, book.mInitial, book.city, book.state, book.publisher == "") || (isNaN(book.year) == true)) {
        document.getElementById("error").innerHTML = "Please enter info in all fields"
    }

    else {
        document.getElementById("error").innerHTML = ""
        addBook();
        resetFields();
    }
}
function addBook() {
        bookList.push(book);
    }

function displayBook() {




    let listings = document.getElementById("bottom");
    let newBook = document.createElement("p");
    listings.appendChild(newBook);
    for (i = 0; i < bookList.length; i++) {
    }
}

function resetFields() {
    document.getElementById("title").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("mInitial").value = "";
    document.getElementById("year").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("publisher").value = "";
}