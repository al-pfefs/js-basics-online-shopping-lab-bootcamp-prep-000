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
  var string = 'In your cart, you have '
  for (var i = 0; i <= cart.length; i++) {
    if (cart.length === 0) {
       string = 'Your shopping cart is empty.'
       } 
    else if (cart.length === 1 && i === 0) {
      string += `${cart[i].itemName} at $${cart[i].itemPrice}.`
        } 
    else if (i < cart.length - 1) {
      string += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
    else if (i === cart.length - 1 && cart.length > 1) {
       string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      }
  return string
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
  totalPrice += cart[i].itemPrice 
  }
 return totalPrice
}

function removeFromCart(item) {
  items = []
  for (i = 0; i < cart.length; i++) {
    items.push(cart[i].itemName)
  }
  console.log(items)
  
  if items.includes(item) {
    itemIndex = items.indexOf(item)
    cart.splice(itemIndex,1)
    return cart
  }
  else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
