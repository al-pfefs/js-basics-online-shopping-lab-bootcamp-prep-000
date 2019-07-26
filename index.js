var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  var string = 'In your cart, you have '
  for (var i = 0; i <= cart.length; i++) {
    if (cart.length === 0) {
       string = 'Your shopping cart is empty.'
       } 
      else if (cart.length === 1 && i === 0) {
        string+= `${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
      } 
      else if (i >= 1 && cart.length > 1) {
      string += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
    }
  }
  return string
}
    
    
      else if (i === cart.length - 1 && cart.length > 1) {
      string += `and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
    }
  }
  return string
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
