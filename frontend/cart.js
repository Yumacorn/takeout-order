let addCartItem = document.getElementsByClassName('add-cart-item')
let removeCartItem = document.getElementsByClassName('remove-cart-item')
const cart= document.querySelector('#order-items')
const cartTotal = document.querySelector('#order-total-price')

function addLineItem(item, price, restId) {
    console.log(`"${item}" - ${price} - ${restId}`)
    const newLineItem = document.createElement('div')
    // newLineItem.className = "order-item"
    // newLineItem.innerHTML = `"${item}" - ${price} - ${restId}`
    const newLineItemName = document.createElement('span')
    newLineItemName.className = "order-item"
    newLineItemName.innerHTML = `${item}`
    const newLineItemPrice = document.createElement('span')
    newLineItemPrice.className = "order-item order-price"
    newLineItemPrice.innerHTML = `${price}`
    const newLineItemRestaurantId = document.createElement('span')
    newLineItemRestaurantId.className = "order-item"
    newLineItemRestaurantId.innerHTML = `${restId}`
    // <span class="cart-header">Item</span>
    // <span class="cart-header">Price</span>
    // <span class="cart-header">Restaurant</span>
    const removeButton = document.createElement('button')
    removeButton.className = "remove-cart-item"
    removeButton.innerText = "X"
    newLineItem.appendChild(removeButton)
    removeButton.addEventListener('click', function(event) {
        let removeButton = event.target
        console.log(removeButton)    
        removePrice = -1 * parseFloat(price.split('$')[1])
        debugger
        updateCartTotal(removePrice)
        removeButton.parentElement.remove()
    })
    newLineItem.appendChild(newLineItemName)
    newLineItem.appendChild(newLineItemPrice)
    newLineItem.appendChild(newLineItemRestaurantId)

    cart.appendChild(newLineItem)
    updateCartTotal(price)
}

function updateCartTotal(adjPrice) {
    if (typeof adjPrice === "string") {
        x = parseFloat(adjPrice.split('$')[1])
    } else {
        x = adjPrice
    }
    curTotal = parseFloat(cartTotal.innerHTML.split('$')[1])
    curTotal += x
    curTotal = curTotal.toFixed(2)
    cartTotal.innerHTML = `$${curTotal}`
    return cartTotal
}