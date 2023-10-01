document.getElementById("shoeSize").addEventListener("click", (e) => {
    switch (e.target.getAttribute("id")) {
        case "xs":
            document.getElementById("sockSize").innerHTML ="extra small";
            break;
        case "s":
            document.getElementById("sockSize").innerHTML = "small";
            break;
        case "m":
            document.getElementById("sockSize").innerHTML = "medium";
            break;
        case "l":
            document.getElementById("sockSize").innerHTML = "large";
            break;
        case "xl":
            document.getElementById("sockSize").innerHTML = "extra large";
            break;

    }
})