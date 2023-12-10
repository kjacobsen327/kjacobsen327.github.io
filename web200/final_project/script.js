let orderList = [];
let ingredientPrices = {
    pepperoni: { small: 1.5, medium: 2, large: 2.5 },
    sausage: { small: 1.5, medium: 2, large: 2.5 },
    bacon: { small: 2, medium: 2.5, large: 3 },
    mushrooms: { small: 1, medium: 1.5, large: 2 },
    onions: { small: 0.5, medium: 1, large: 1.5 },
    peppers: { small: 1, medium: 1.5, large: 2 },
};

let crustPrices = {
    small: 14,
    medium: 16,
    large: 20
};

let taxRate = 0.1;


let crustSizeChoices = document.querySelectorAll('input[name="crustSize"]');
for (let i = 0; i < crustSizeChoices.length; i++) {
    crustSizeChoices[i].addEventListener('click', displayIngredientPrices);
}
function displayIngredientPrices() {
    let crustSize = document.querySelectorAll('input[name="crustSize"]');
    let ingredients = document.querySelectorAll('input[name="ingredients"]');
    let ingredientPriceDivElement = [];

    for (let i = 0; i < ingredients.length; i++) {
        ingredientPriceDivElement.push(ingredients[i].nextSibling.nextSibling);
        ingredientPriceDivElement[i].innerHTML = '';

        if (crustSize[0].checked) {
            ingredientPriceDivElement[i].innerHTML = '$' + Object.entries(ingredientPrices)[i][1].small.toFixed(2);
        }
        if (crustSize[1].checked) {
            ingredientPriceDivElement[i].innerHTML = '$' + Object.entries(ingredientPrices)[i][1].medium.toFixed(2);
        }
        if (crustSize[2].checked) {
            ingredientPriceDivElement[i].innerHTML = '$' + Object.entries(ingredientPrices)[i][1].large.toFixed(2);
        }
    }
}

function addToOrder() {
    let crustSize = document.querySelector('input[name="crustSize"]:checked').value;
    let selectedIngredients = [];
    let ingredientCheckboxes = document.querySelectorAll('input[name="ingredients"]:checked');

    // Push all checked ingredients into selectedIngredients array
    for (let i = 0; i < ingredientCheckboxes.length; i++) {
        selectedIngredients.push(ingredientCheckboxes[i].value);
    }

    // Pizza object contains checked crust size value and selectedIngredients array from above
    let pizza = {
        crustSize: crustSize,
        ingredients: selectedIngredients
    };

    // Calculate total price for the pizza
    let totalPrice = calculateTotalPrice(pizza);

    // Order object contains pizza object and total price
    let order = {
        pizza: pizza,
        // customer: customer,
        totalPrice: totalPrice
    };

    orderList.push(order);
    displayOrderSummary();
    updateOrderTotals();

    var radioBtns = document.getElementsByTagName("input");

    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].type == "radio") {
            radioBtns[i].checked = false;
        }
    }
    for (i = 0; i < ingredientCheckboxes.length; i++) {

        ingredientCheckboxes[i].checked = false;
    }
    displayIngredientPrices();
}


function calculateTotalPrice(pizza) {
    let crustPrice = crustPrices[pizza.crustSize];
    let ingredientPrice = 0;

    pizza.ingredients.forEach(function (ingredient) {
        ingredientPrice += ingredientPrices[ingredient][pizza.crustSize];
    });

    return crustPrice + ingredientPrice;
}

function displayOrderSummary() {
    let summaryList = document.getElementById("orderSummary");
    summaryList.innerHTML = "";

    // Get each order by index value from orderList array as a list item
    orderList.forEach(function (order, index) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            Pizza ${index + 1}:<br>
            Crust Size: ${order.pizza.crustSize}<br>
            Ingredients: ${order.pizza.ingredients.join(', ')}<br>

            Total Price: $${order.totalPrice.toFixed(2)}

            <button class="removeButton" onclick="removePizza(${index})">X</button>
        `;
        // Add each list item as a child elemenet to <ul id="orderSummary"
        summaryList.appendChild(listItem);
    });
}
// Function to remove pizza from the remove button created on each list item
function removePizza(index) {
    orderList.splice(index, 1);
    displayOrderSummary();
    updateOrderTotals();
}

function updateOrderTotals() {
    // Get totalPrice from each order object
    let subtotal = orderList.reduce(function (acc, order) {
        return acc + order.totalPrice;
    }, 0);

    let tax = subtotal * taxRate;
    let grandTotal = subtotal + tax;

    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `Tax (10%): $${tax.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}

let submit = document.getElementById('submitOrder');
submit.addEventListener('click', function (e) {
    e.preventDefault()
});
submit.addEventListener('click', submitOrder);

function submitOrder() {
    // Check if customer information is complete
    if (
        document.getElementById('name').value === '' ||
        document.getElementById('address').value === '' ||
        document.getElementById('city').value === '' ||
        document.getElementById('state').value === '' ||
        document.getElementById('zip').value === '' ||
        document.getElementById('phone').value === '' ||
        document.getElementById('email').value === ''
    ) {
        alert('Please complete all customer information before submitting the order.');
        return;
    }

    // Create a complete order object
    let completeOrder = {

        customerInfo: {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        },
        pizzas: orderList,
        orderTotals: {
            subtotal: parseFloat(document.getElementById('subtotal').textContent.replace('Subtotal: $', '')),
            tax: parseFloat(document.getElementById('tax').textContent.replace('Tax (8%): $', '')),
            grandTotal: parseFloat(document.getElementById('grandTotal').textContent.replace('Grand Total: $', ''))
        }
    };

    // Log the complete order object to the console
    console.log(completeOrder);

    // Reset the form and order list
    document.getElementById('pizzaForm').reset();
    orderList = [];
    displayOrderSummary();
    updateOrderTotals();
}