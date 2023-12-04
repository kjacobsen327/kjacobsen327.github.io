let selectedCrustSize = "";
let iPrice = 0;
let selectedToppings = [];
let pizza = {};

let crustSizeOptions = document.querySelectorAll("input[name=crust-size]");
let toppingOptions = document.querySelectorAll("input[name=toppings]");
let toppingsCost = document.getElementById("toppingsCost");

for (let i = 0; i < crustSizeOptions.length; i++) {
    crustSizeOptions[i].addEventListener("click", function () {
        selectedCrustSize = this.value;
        pizza.size = selectedCrustSize;
        console.log(pizza);
        updateToppingsCost(selectedCrustSize);
    })
}

for (let i = 0; i < toppingOptions.length; i++) {
    toppingOptions[i].addEventListener("click", function () {
        if (this.checked) {
            selectedToppings.push(this.value);
        }
        else if (this.checked == false) {
            let index = selectedToppings.indexOf(this.value);
            selectedToppings.splice(index, 1);
        }
        pizza.toppings = selectedToppings;
        console.log(pizza);
    })
}

function updateToppingsCost(crustSize) {
    switch (crustSize) {
        case "small":
            iPrice = 2;
            break;
        case "medium":
            iPrice = 2.5;
            break;
        case "large":
            iPrice = 3;
            break;
    }
    toppingsCost.innerHTML = "$" + iPrice.toFixed(2) + " each";
}