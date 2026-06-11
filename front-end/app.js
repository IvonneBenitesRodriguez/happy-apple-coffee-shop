const API_URL = 'http://localhost:3000/api/v1';

let cart = [];
let products = [];

// Fetch products from backend
async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    products = await response.json();
    renderProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function renderProducts() {
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    container.innerHTML += `
      <div id="product-${products[i].id}">
        <span>${products[i].name}</span>
        <span>price: $${parseFloat(products[i].price).toFixed(2)}</span>
        <button class="btn-add" onclick="handleAddToCart(${i})">Add to cart</button>
      </div>
    `;
  }
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  for (let i = 0; i < cart.length; i++) {
    cartItems.innerHTML += `
      <div>
        <span>${cart[i].name}</span>
        <span>qty: ${cart[i].quantity}</span>
        <button onclick="handleRemove(${cart[i].id})">Remove</button>
      </div>
    `;
  }
  document.getElementById('cart-total').innerHTML = `<span>Total: $${getTotal(cart).toFixed(2)}</span>`;
  document.getElementById('empty-state').style.display = cart.length === 0 ? 'block' : 'none';
}

function handleRemove(productId) {
  cart = removeItem(cart, productId);
  renderCart();
}

function handleAddToCart(index) {
  cart = addItem(cart, products[index]);
  renderCart();
}


// Calling the function once the page is loaded
fetchProducts();
renderCart();