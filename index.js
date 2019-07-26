var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  
   var itemHash = {
     itemName: item,
     itemPrice: price
   }
   
   cart.push(itemHash)
   return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var string = 'In your cart, you have '
  for (var i = 0; i <= cart.length; i++) {
    if (cart.length === 0) {
       string = 'Your shopping cart is empty.'
       } 
    else if (cart.length === 1 && i === 0) {
      string += `${cart[i].itemName} at $${cart[i].itemPrice}.`
        } 
    else if (i < cart.length-1) {
      string += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
    else if (i === cart.length - 1 && cart.length > 1) {
       string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      }
  return string
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
  var total = 0+= cart[i].itemPrice 
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
