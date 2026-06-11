const { addItem, removeItem, updateQuantity, getTotal, getItemCount, clearCart } = require('./cart');
describe('addItem', () => {
    
    test('adds a product to an empty cart',()=> {
        const cart = [];
        const product = { id: 12, name: 'cup', price: 5.35};
        const result = addItem(cart, product);
       expect((result.length)).toBe(1);
    })

    test('increments the quantity by 1 if a product already exists in the cart', ()=> {
        const cart = [ { id:12, name:'cup', price: 5.35, quantity: 1}];
        const product = cart[0];
        const result = addItem(cart, product);
        expect(result[0].quantity).toBe(2);
    })
})

describe('removeItem', () => {

    test('removes a product from the cart', () => {
        const cart = [{ id: 12, name: 'cup', price: 5.45, quantity: 2}];
        const productId = cart[0].id;
        const result = removeItem(cart, productId);
        expect(result.length).toBe(0);
    });

    test('returns the same cart if the productId does not exist',()=> {
        const cart = [{id: 12, name: 'cup', price: 5.35, quantity: 2}];
        const productId = 20;
        const result = removeItem(cart, productId);
        expect(result.length).toBe(1);
    });
});

describe('updateQuantity',() => { 
  
    test('a new product enters to the cart, sets the quantity of the product',()=>{ 
  const cart = [{id:13, name:'cup', price: 5.35, quantity: 3}];
  const productId = cart[0].id;
  const quantity = 3;
 const result = updateQuantity(cart, productId, quantity);
expect(result[0].quantity).toBe(3);

});

test('the item is removed if a quantity is 0 or less than 0', () => {
    const cart = [{id: 13, name: 'cup', price: 5.35, quantity: -1}];
    const productId = cart[0].id;
    const quantity = -1;
    const result = updateQuantity(cart, productId, quantity);
    expect(result.length).toBe(0);

});
});

describe('getTotal', () => {

    test('returns the totalPrice as a number: sum of price * quantity for all items', () => {
        const cart = [{id: 12, name: 'cup', price: 5.35, quantity: 2}];
        const result = getTotal(cart);
        expect(result).toBe(10.70);
    });

    test('returns 0 if cart is empty', () => {
        const cart = [];
        const result = getTotal(cart);
        expect(result).toBe(0);
    });
});


describe('getItemCount', () => {
    
    test('returns the total number of individual items: sum of all quantities', ()=>{
        const cart = [{ id: 12, name: 'cup', price: 5.35, quantity: 2},
                      { id: 13, name: 'cup', price: 5.35, quantity: 2}  
        ];
        const result = getItemCount(cart);
        expect(result).toBe(4);
    });

    test('returns 0 if the cart is empty', ()=> {
        const cart = [];
        const result = getItemCount(cart);
        expect(result).toBe(0);
    });
});

describe('clearCart', () => {

    test('returns an empty array', () => {
        
        const result = clearCart();
        expect(result.length).toBe(0);
    });


    test('returns an array type',() => {
      
        const result = clearCart();
        expect(Array.isArray(result)).toBe(true);
    }); 

})