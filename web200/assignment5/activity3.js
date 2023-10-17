let sockSize = document.getElementById("sockSize");

document.getElementById("shoeSize").addEventListener("click", (e) => {
    switch (e.target.getAttribute("id")) {
        case "xs":
            sockSize.innerHTML ="extra small";
            break;
        case "s":
            sockSize.innerHTML = "small";
            break;
        case "m":
            sockSize.innerHTML = "medium";
            break;
        case "l":
            sockSize.innerHTML = "large";
            break;
        case "xl":
            sockSize.innerHTML = "extra large";
            break;

    }
})