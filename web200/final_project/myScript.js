let selectedCrustSize = "";
let selectedToppings = [];
let pizza = {};

let crustSizeOptions = document.querySelectorAll("input[name=crust-size]");
let toppingOptions = document.querySelectorAll("input[name=toppings]");


for (let i = 0; i < crustSizeOptions.length; i++) {
    crustSizeOptions[i].addEventListener("click", function () {
        selectedCrustSize = this.value;
        pizza.size = selectedCrustSize;
        console.log(pizza);
    })
}

for (let i = 0; i < toppingOptions.length; i++) {
    toppingOptions[i].addEventListener("click", function () {
        if (this.checked) {
            selectedToppings.push(this.value);
            console.log(selectedToppings);
        }
        else if (this.checked == false) {
            let index = selectedToppings.indexOf(this.value);
            selectedToppings.splice(index, 1);
            console.log(selectedToppings);
        }
        pizza.toppings = selectedToppings;
        console.log(pizza);
    })
}