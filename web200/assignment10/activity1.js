
document.getElementById("addBook").addEventListener("click", createBook);
document.getElementById("addBook").addEventListener("click", createAPA);
let book = {};
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

function createAPA() {
    let apa = document.getElementById("list");
    for (i=0; i<8; i++){

    if ((Object.values(book)[i] == "") || isNaN(book.year) == true)  {
        apa.innerHTML = "Please enter all the fields"
    }
    else {
        apa.innerHTML = book.apa();
    }
}
}