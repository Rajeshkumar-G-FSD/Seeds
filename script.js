document.getElementById('add-food-button').addEventListener('click', addFoodItem);

let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addFoodItem() {
    const foodName = document.getElementById('food-name').value;
    const foodQuantity = document.getElementById('food-quantity').value;

    if (foodName && foodQuantity) {
        const foodItem = {
            name: foodName,
            quantity: parseInt(foodQuantity, 10)
        };
        foodItems.push(foodItem);
        localStorage.setItem('foodItems', JSON.stringify(foodItems));
        displayFoodItems();
        resetFoodFields();
    }
}

function displayFoodItems() {
    const foodList = document.getElementById('food-items-list');
    foodList.innerHTML = '';

    foodItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'border-b', 'bg-white', 'rounded-lg', 'shadow');

        listItem.innerHTML = `
            <span>${item.name} - ${item.quantity}</span>
            <div>
                <button onclick="editFoodItem(${index})" class="bg-blue-500 text-white px-2 py-1 rounded-lg ml-2">Edit</button>
                <button onclick="deleteFoodItem(${index})" class="bg-red-500 text-white px-2 py-1 rounded-lg ml-2">Delete</button>
            </div>
        `;
        foodList.appendChild(listItem);
    });
}

function resetFoodFields() {
    document.getElementById('food-name').value = '';
    document.getElementById('food-quantity').value = '';
}

function editFoodItem(index) {
    const foodItem = foodItems[index];
    document.getElementById('food-name').value = foodItem.name;
    document.getElementById('food-quantity').value = foodItem.quantity;
    deleteFoodItem(index);
}

function deleteFoodItem(index) {
    foodItems.splice(index, 1);
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
    displayFoodItems();
}

window.onload = () => {
    displayFoodItems();
};
