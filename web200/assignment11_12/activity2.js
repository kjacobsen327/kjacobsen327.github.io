window.addEventListener("load", displaySize)
window.addEventListener("resize", displaySize)

function displaySize() {
    let width = window.outerWidth;
    let height = window.outerHeight;
    let widthTxt = "Window width: " + width;
    let heightTxt = "Window height: " + height;
    document.getElementById("windowWidth").innerHTML = widthTxt;
    document.getElementById("windowHeight").innerHTML = heightTxt;
    document.getElementById("pageLocation").innerHTML = "This web page is located at: " + window.location.href;
}