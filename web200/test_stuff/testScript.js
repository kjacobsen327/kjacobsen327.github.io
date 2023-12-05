
let customer = {};
let pizza = {};
let pizzasBuilt = [];
let order = {
    pizzasBuilt: [],
    customer: {}
};
let selectedCrustSize = "";
let iPrice = 0;
let selectedToppings = [];
let price = 0;
let pizzaCounter = 1; //to keep track of and name pizzas in order

let pizzaOptions = document.getElementById("pizzaOptions").getElementsByTagName("input");
let crustSizeOptions = document.querySelectorAll("input[name=crust-size]");
let toppingOptions = document.querySelectorAll("input[name=toppings]");
let toppingsCost = document.getElementById("toppingsCost");
let priceText = document.getElementById("price");
let addPizzaBtn = document.getElementById("addPizza");

addPizzaBtn.addEventListener("click", function (e) {
    e.preventDefault()
});
addPizzaBtn.addEventListener("click", addPizzaToOrder);

// window.addEventListener("load", createNewPizza);
// function createNewPizza() {


for (let i = 0; i < crustSizeOptions.length; i++) {
    if (crustSizeOptions[i].checked == false) {
        for (let i = 0; i < toppingOptions.length; i++) {
            toppingOptions[i].disabled = true;
        }
    }
    crustSizeOptions[i].addEventListener("click", function () {
        for (let i = 0; i < toppingOptions.length; i++) {
            toppingOptions[i].disabled = false;
        }
        selectedCrustSize = this.value;
        // pizza.size = selectedCrustSize;
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

for (let i = 0; i < pizzaOptions.length; i++) {
    pizzaOptions[i].addEventListener("click", updatePrice);
}

function updatePrice() {
    switch (selectedCrustSize) {
        case "small":
            price = 14;
            break;
        case "medium":
            price = 17;
            break;
        case "large":
            price = 20;
            break;
    }
    price = price + selectedToppings.length * iPrice;
    priceText.innerHTML = "$" + price.toFixed(2);
    // pizza.price = price;
}

function Pizza(selectedCrustSize, selectedToppings, price) {
    this.size = selectedCrustSize,
        this.toppings = selectedToppings,
        this.price = price;
}
function addPizzaToOrder() {
    let pizza = new Pizza(selectedCrustSize, selectedToppings, price);
    pizza.name = "Pizza " + pizzaCounter;
    pizzaCounter++;
    pizzasBuilt.push(pizza);
    console.log(selectedToppings);
    console.log(pizza);
    console.log(pizzasBuilt);
    updateSubtotal();
}

let orderDisplay = document.getElementById("ordersList");

function updateSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < pizzasBuilt.length; i++) {

        subtotal += pizzasBuilt[i].price;
    }
    orderDisplay.innerHTML = subtotal;
}