// JavaScript Dynamics - Conectando todo


let cart = [];

const products = [
    {
        id: 1,
        name: 'Coffe Mug',
        price: 5.35
    },
    {
        id:2,
        name: 'Coffe Toaster',
        price: 5.35
    },
    {
        id:3,
        name: 'Italian Coffee Maker',
        price: 5.35
    },
    {
        id:4,
        name: 'French Coffee Maker',
        price: 5.35
    },
    {
        id:5,
        name: 'Chinese Coffee Maker',
        price: 10.35
    }
];

const buttons = document.querySelectorAll('.btn-add');
for(let i=0; i < buttons.length; i++){
    const index = i; //captura el valor actual
    buttons[i].addEventListener('click', function(){
        cart = addItem(cart, products[index]);
        renderCart();
    })
}

function renderCart(){
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    for(let i=0; i < cart.length; i++){
        cartItems.innerHTML += `
        <div>
            <span>${cart[i].name}</span>
            <span>qty: ${cart[i].quantity}</span>
           
            <button onclick="handleRemove(${cart[i].id})">Remove</button>
        </div>
        `
    }

    document.getElementById('cart-total').innerHTML = `<span>Total: $${getTotal(cart).toFixed(2)}</span>`;
    document.getElementById('empty-state').style.display = cart.length === 0 ? 'block' : 'none';
}
function handleRemove(productId){
    cart = removeItem(cart, productId);
    renderCart();
}

renderCart();