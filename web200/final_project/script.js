let orderList = [];

// created an object for ingredient prices, so that each ingredient could have a different price based
// on size, and could be updated easily
let ingredientPrices = {
    pepperoni: { small: 1.5, medium: 2, large: 2.5 },
    sausage: { small: 1.5, medium: 2, large: 2.5 },
    bacon: { small: 2, medium: 2.5, large: 3 },
    mushrooms: { small: 1, medium: 1.5, large: 2 },
    onions: { small: 0.5, medium: 1, large: 1.5 },
    peppers: { small: 1, medium: 1.5, large: 2 },
};

let crustPrices = {
    small: 13.99,
    medium: 15.99,
    large: 19.99
};

let customerInput = document.getElementsByTagName('input');
let stateSelect = document.getElementById('state');

let errorMsg = document.getElementById('errorMsg');
let errorAsterisks = document.getElementsByClassName('asterisk');

let taxRate = 0.1;

let confirmationScreen = document.getElementById("confirmationScreen");
let checkBtn = document.getElementById("checkBtn");
let backBtn = document.getElementById("backBtn");
let submit = document.getElementById('submitOrder');

customerInput[0].addEventListener('blur', checkName);
customerInput[1].addEventListener('blur', checkAddress);
customerInput[2].addEventListener('blur', checkCity);
stateSelect.addEventListener('blur', checkState);
customerInput[3].addEventListener('blur', checkZip);
customerInput[4].addEventListener('blur', checkPhone);
customerInput[5].addEventListener('blur', checkEmail);

checkBtn.addEventListener('click', getConfirmation);
backBtn.addEventListener('click', goBack);
submit.addEventListener('click', function (e) {
    e.preventDefault()
});
submit.addEventListener('click', submitOrder);


// Add event listener to each size input, to display and change the ingredient prices under each extra ingredient
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

        // small
        if (crustSize[0].checked) {
            ingredientPriceDivElement[i].innerHTML = '$' + Object.entries(ingredientPrices)[i][1].small.toFixed(2);
        }

        // medium
        if (crustSize[1].checked) {
            ingredientPriceDivElement[i].innerHTML = '$' + Object.entries(ingredientPrices)[i][1].medium.toFixed(2);
        }

        //large
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

    let radioBtns = document.getElementsByTagName("input");

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

function displayOrderSummary() {
    let summaryList = document.getElementById("orderSummary");
    summaryList.innerHTML = "";

    // Get each order by index value from orderList array as a list item
    orderList.forEach(function (order, index) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Pizza ${index + 1}:</strong><br>
            Size: ${order.pizza.crustSize}<br>
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

function calculateTotalPrice(pizza) {
    let crustPrice = crustPrices[pizza.crustSize];
    let ingredientPrice = 0;

    pizza.ingredients.forEach(function (ingredient) {
        ingredientPrice += ingredientPrices[ingredient][pizza.crustSize];
    });

    return crustPrice + ingredientPrice;
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

// Customer info validation
function checkName() {
    let name = document.getElementById('name').value;
    if (
        name === '' ||
        // Check input: no numbers allowed
        /^[a-zA-Z\s,-]+$/.test(name) == false
    ) {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[0].innerHTML = " *";
        customerInput[0].classList.remove('success');
        customerInput[0].classList.add('error');
        return false;
    }
    else {
        customerInput[0].classList.remove('error');
        customerInput[0].classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[0].innerHTML = "";

        return true;
    }
}
function checkAddress() {
    let address = document.getElementById('address').value;
    if (address === '') {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[1].innerHTML = " *";
        customerInput[1].classList.remove('success');
        customerInput[1].classList.add('error');
        return false;
    }
    else {
        customerInput[1].classList.remove('error');
        customerInput[1].classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[1].innerHTML = "";
        return true;
    }
}
function checkCity() {
    let city = document.getElementById('city').value;
    if (
        city === '' ||
        // Check input: no numbers allowed
        /^[a-zA-Z\s,-]+$/.test(city) == false
    ) {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[2].innerHTML = " *";
        customerInput[2].classList.remove('success');
        customerInput[2].classList.add('error');
        return false;
    }
    else {
        customerInput[2].classList.remove('error');
        customerInput[2].classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[2].innerHTML = "";
        return true;
    }
}
function checkState() {
    let state = document.getElementById('state').value;
    let stateSelectBox = document.getElementById('state');

    if (state === 'none') {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[3].innerHTML = " *";
        stateSelectBox.classList.remove('success');
        stateSelectBox.classList.add('error');
        return false;
    }
    else {
        stateSelectBox.classList.remove('error');
        stateSelectBox.classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[3].innerHTML = "";
        return true;
    }
}
function checkZip() {
    let zip = document.getElementById('zip').value;
    if (
        zip === '' ||
        // Check input: only numbers in XXXXX or XXXXX-XXXX pattern allowed
        /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip) == false
    ) {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[4].innerHTML = " *";
        customerInput[3].classList.remove('success');
        customerInput[3].classList.add('error');
        return false;
    }
    else {
        customerInput[3].classList.remove('error');
        customerInput[3].classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[4].innerHTML = "";
        return true;
    }
}
function checkPhone() {
    let phone = document.getElementById('phone').value;
    if (
        phone === '' ||
        // Check input for valid phone formats
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone) == false
    ) {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[5].innerHTML = " *";
        customerInput[4].classList.remove('success');
        customerInput[4].classList.add('error');
        return false;
    }
    else {
        customerInput[4].classList.remove('error');
        customerInput[4].classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[5].innerHTML = "";
        return true;
    }
}
function checkEmail() {
    let email = document.getElementById('email').value;
    if (
        email === '' ||
        // Check input: email pattern must be XXXX + @ + XXX + . + XXX
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) == false
    ) {
        errorMsg.innerHTML = "Please correct these fields:";
        errorAsterisks[6].innerHTML = " *";
        customerInput[5].classList.remove('success');
        customerInput[5].classList.add('error');
        return false;
    }
    else {
        customerInput[5].classList.remove('error');
        customerInput[5].classList.add('success');
        errorMsg.innerHTML = "";
        errorAsterisks[5].innerHTML = "";
        return true;
    }
}
function valid() {
    checkName();
    checkAddress();
    checkCity();
    checkState();
    checkZip();
    checkPhone();
    checkEmail();
    if (
        checkName() == false ||
        checkAddress() == false ||
        checkCity() == false ||
        checkState() == false ||
        checkZip() == false ||
        checkPhone() == false ||
        checkEmail() == false
    ) {
        return false;
    }
    else {
        errorMsg.innerHTML = '';
        return true;
    }
}
function getConfirmation() {

    // Check if customer information is complete
    if (valid()) {
        // Check to make sure that at least 1 pizza has been added to the order
        if (orderList.length > 0) {
            confirmationScreen.style.display = 'block';

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
                    tax: parseFloat(document.getElementById('tax').textContent.replace('Tax (10%): $', '')),
                    grandTotal: parseFloat(document.getElementById('grandTotal').textContent.replace('Grand Total: $', ''))
                }
            };
            let showCustomerInfo = document.getElementById("showCustomerInfo");
            let showPizzas = document.getElementById("showPizzas");
            let showTotals = document.getElementById("showTotals");

            showCustomerInfo.innerHTML = `
            ${completeOrder.customerInfo.name}<br>
            ${completeOrder.customerInfo.address}<br>
            ${completeOrder.customerInfo.city} ${completeOrder.customerInfo.state}, ${completeOrder.customerInfo.zip}<br>
            Phone: ${formatPhoneNumber(completeOrder.customerInfo.phone)}
            `;

            orderList.forEach(function (order, index) {
                let listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>Pizza ${index + 1}:</strong><br>
                    Size: ${order.pizza.crustSize}<br>
                    Ingredients: ${order.pizza.ingredients.join(', ')}<br>
                `;
                showPizzas.appendChild(listItem);
            });
            showTotals.innerHTML = `
            Subtotal: $${completeOrder.orderTotals.subtotal}<br>
            Tax: $${(completeOrder.orderTotals.tax).toFixed(2)}
            <Strong>Grand Total: $${(completeOrder.orderTotals.grandTotal).toFixed(2)}
            `;

        }
        else {
            alert('No pizzas have been added to your order!')
        }
    }
}
let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
    return null
};

function goBack() {
    let showPizzas = document.getElementById("showPizzas");
    showPizzas.innerHTML = "";
    confirmationScreen.style.display = 'none';
}
function submitOrder() {
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
            tax: parseFloat(document.getElementById('tax').textContent.replace('Tax (10%): $', '')),
            grandTotal: parseFloat(document.getElementById('grandTotal').textContent.replace('Grand Total: $', ''))
        }
    };

    // send order
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let req = new XMLHttpRequest();
    console.log(req)
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 201) {
            // let object = JSON.parse(req.response);
            alert(`
                    Thank you ${completeOrder.customerInfo.name}!

                    Your order has been placed!

                    My cat Bobby will be working hard
                    making your pizza purr-fect!
                `);
        }
    }
    let body = JSON.stringify(completeOrder);
    req.send(body);

    console.log(body);
    // Reset the form inputs and order lists
    document.getElementById('pizzaForm').reset();
    orderList = [];
    displayOrderSummary();
    updateOrderTotals();
    let showPizzas = document.getElementById("showPizzas");
    showPizzas.innerHTML = "";
    confirmationScreen.style.display = 'none';
    for (let i = 0; i < customerInput.length; i++) {
        customerInput[i].classList.remove('success');
    }
    stateSelect.classList.remove('success');
}

