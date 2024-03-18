let cart = [];
let totalPrice = 0;

function addToCart() {
  const item = document.getElementById('item').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = getPrice(item);
  const totalItemPrice = price * quantity;

  cart.push({ item, quantity, totalItemPrice });
  totalPrice += totalItemPrice;

  updateCartUI();
}

function getPrice(item) {
  switch (item) {
    case 'Dosa':
      return 1.00;
    case 'Poha':
      return 0.5;
    case 'Upma':
      return 0.45;
      case 'Aaloo Paratha':
      return 0.4;
      case 'Puri Sabzi':
      return 0.6;
      case 'Idli-Vada Thali':
      return 0.5;
    default:
      return 0.00;
  }
}

function updateCartUI() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  cartItemsElement.innerHTML = '';
  totalPrice = 0;

  cart.forEach((cartItem) => {
    const li = document.createElement('li');
    li.textContent = `${cartItem.quantity} x ${cartItem.item} - $${cartItem.totalItemPrice.toFixed(2)}`;
    cartItemsElement.appendChild(li);
    totalPrice += cartItem.totalItemPrice;
  });

  totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function checkout() {
  // Implement your checkout logic here
  alert('Redirecting to payment gateway...');
}
