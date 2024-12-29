let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button onclick="incrementQuantity(${item.id})">+</button>
      <button onclick="decrementQuantity(${item.id})">-</button>
    `;
    cartItems.appendChild(cartItemElement);
  });

  totalPrice.textContent = total.toFixed(2);
}

function incrementQuantity(productId) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

function decrementQuantity(productId) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity <= 0) {
      cart = cart.filter(item => item.id !== productId);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

window.onload = () => {
  displayCart();
};
