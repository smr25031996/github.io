function incrementQuantity(itemId) {
    const quantityElement = document.getElementById(`quantity${itemId}`);
    const totalElement = document.getElementById(`total${itemId}`);
    const cartTotalElement = document.getElementById("cartTotal");

    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;

    // Update the total price for this item
    const itemPrice = itemId === 1 ? 99.99 : 149.99; // Set the correct item price
    const itemTotal = (itemPrice * quantity).toFixed(2);
    totalElement.textContent = itemTotal;

    // Update the total cart value
    const cartTotal = parseFloat(cartTotalElement.textContent);
    const newCartTotal = (cartTotal + itemPrice).toFixed(2);
    cartTotalElement.textContent = newCartTotal;
}

function decrementQuantity(itemId) {
    const quantityElement = document.getElementById(`quantity${itemId}`);
    const totalElement = document.getElementById(`total${itemId}`);
    const cartTotalElement = document.getElementById("cartTotal");

    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;

        // Update the total price for this item
        const itemPrice = itemId === 1 ? 99.99 : 149.99; // Set the correct item price
        const itemTotal = (itemPrice * quantity).toFixed(2);
        totalElement.textContent = itemTotal;

        // Update the total cart value
        const cartTotal = parseFloat(cartTotalElement.textContent);
        const newCartTotal = (cartTotal - itemPrice).toFixed(2);
        cartTotalElement.textContent = newCartTotal;
    }
}
