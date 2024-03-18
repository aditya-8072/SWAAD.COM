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
    case 'Noodles':
      return 1.00;
    case 'Tteokbokki':
      return 0.5;
    case 'Jain Thali':
      return 0.45;
      case 'Paneer Buttor Masala':
      return 0.4;
      case 'Pasta':
      return 0.6;
      case 'Dumplings':
      return 0.5;
      case 'Fish Curry':
      return 0.5;
      case 'Puliyogare':
      return 0.4;
      case 'Biryani':
      return 1.25;
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
