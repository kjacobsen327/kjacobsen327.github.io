
document.getElementById("addBook").addEventListener("click", createBook);
document.getElementById("addBook").addEventListener("click", addBook);

let book = {};
let bookList = [];
function createBook() {
    book = {
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


function addBook() {
    let parent = document.getElementById("bottom");
    let newBook = document.createElement("p");
    let i = 0;
    for (i = 0; i < 8; i++) {

        if (book.title, book.lName, book.fName, book.mInitial, book.city, book.state, book.publisher == "" || isNaN(book.year) == true) {
            document.getElementById("error").innerHTML = "Please enter info in all fields"
        }
        
        else {
            i=8;
            document.getElementById("error").innerHTML = ""
            newBook.innerHTML = book.apa();
            parent.appendChild(newBook);
            bookList.push(book);
            resetFields();
        }
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