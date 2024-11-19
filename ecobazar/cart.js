// Sample cart items for demonstration (usually this would be stored in localStorage or a database)
let cartItems = [
  { id: 1, name: "Eco-Friendly Bottle", price: 12, quantity: 1 },
  { id: 2, name: "Reusable Straw", price: 8, quantity: 2 }
];

// Function to render cart items dynamically
function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items-container");
  cartItemsContainer.innerHTML = "";  // Clear previous items
  
  cartItems.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    
    itemElement.innerHTML = `
      <div class="item-info">
        <span><strong>${item.name}</strong></span>
        <span>Rs ${item.price.toFixed(2)}</span>
      </div>
      <div class="item-quantity">
        <button onclick="changeQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>
      <div class="item-total">
        <strong>Rs ${(item.price * item.quantity).toFixed(2)}</strong>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
    
    cartItemsContainer.appendChild(itemElement);
  });
  
  updateCartSummary();
}

// Function to change the quantity of an item
function changeQuantity(itemId, change) {
  const item = cartItems.find(item => item.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) item.quantity = 1;  // Prevent negative quantity
    renderCartItems();
  }
}

// Function to remove an item from the cart
function removeItem(itemId) {
  cartItems = cartItems.filter(item => item.id !== itemId);
  renderCartItems();
}

// Function to update the cart summary (total price and items count)
function updateCartSummary() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

// Initial render of cart items
renderCartItems();
