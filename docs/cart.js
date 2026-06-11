function addItem(cart,product){
  for(let i = 0; i < cart.length; i++){
     if(cart[i].id === product.id){
       cart[i].quantity++;      
       return cart; // producto ya existe incrementa quantity y retorna.
      }
    } 
    cart.push({ ... product, quantity: 1 }); 
     return cart;  // producto nuevo agregado, retorna carrito actualizado

    }


 function removeItem(cart, productId){
  for(let i = 0; i < cart.length; i++){
    if(cart[i].id === productId){
      cart.splice(i, 1);
      return cart; // Devuelve elementos actualizados despues de retirar elemento
    }
  }
  return cart; // return fuera de loop usado cuando el productId does not exist (edge case)
}

function updateQuantity(cart, productId, quantity){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id === productId){
            if( quantity === 0 || quantity < 0){
                cart.splice(i,1);
                return cart; // return dentro de loop
        }else{
               cart[i].quantity = quantity;
                return cart; // return dentro de loop
            }
        }
    }
    return cart; // return fuera del loop
}

function getTotal(cart){
    let result = 0;
    for(let i = 0; i < cart.length; i++){
        if(cart[i].price > 0 && cart[i].quantity > 0) {
          result += cart[i].price * cart[i].quantity;
        }
    }
    return result; // return fuera del loop 
}

function getItemCount(cart) {
    let result = 0;
    for(let i=0; i < cart.length; i++){
        if(cart[i].quantity > 0 ){
            result += cart[i].quantity;
        }
    }
    return result;
}

function clearCart(){
    return [];
}

// module.exports = { addItem, removeItem, updateQuantity, getTotal, getItemCount, clearCart };


if (typeof module !== 'undefined') {
    module.exports = { addItem, removeItem, updateQuantity, getTotal, getItemCount, clearCart };
}