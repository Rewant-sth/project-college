// just an example, need to replace with actual cart after made
const cartItems = [
    { name: "Eco-Friendly Bottle", price: 799.99, quantity: 2 },
    { name: "Biodegradable Cutlery", price: 449.49, quantity: 1 },
    { name: "Reusable Straw Set", price: 599.99, quantity: 3 }
];

function updateOrderSummary() {
    const cartItemsList = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    cartItemsList.innerHTML = ''; // Clear the current list and overlap the another one

    cartItems.forEach(item => {
        const listItem = document.createElement('tr');
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        listItem.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>NPR ${itemTotal.toFixed(2)}</td>
        `;
        cartItemsList.appendChild(listItem);
    });

    totalAmount.textContent = `Rs. ${total.toFixed(2)}`; // Update total below item list
}
updateOrderSummary();

document.getElementById('complete-purchase').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment-method').value;

    switch (paymentMethod) {
        case 'esewa':
            window.location.href = 'https://www.esewa.com';
            break;
        case 'khalti':
            window.location.href = 'https://www.khalti.com';
            break;
        case 'fonepay':
            window.location.href = 'https://www.fonepay.com';
            break;
        case 'credit-card':
            window.location.href = 'https://www.creditcard.com';
            break;
        case 'cash-on-delivery':
            alert('Thank you! Your order will be delivered to you, and you can pay upon delivery.');
            break;
        default:
            alert('Please select a payment method.');
    }
});
