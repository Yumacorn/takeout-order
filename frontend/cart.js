let addCartItem = document.getElementsByClassName('add-cart-item')
let removeCartItem = document.getElementsByClassName('remove-cart-item')
const cart= document.querySelector('#order-items')
const cartTotal = document.querySelector('#order-total-price')
const totalItems = document.querySelector('#totalItems')
const purchase = document.querySelector('#purchase')

function addLineItem(item, price, restId) {
    console.log(`"${item}" - ${price} - ${restId}`)
    const newLineItem = document.createElement('div')
    const newLineItemName = document.createElement('span')
    newLineItemName.className = "order-item"
    newLineItemName.innerHTML = `${item}`
    const newLineItemPrice = document.createElement('span')
    newLineItemPrice.className = "order-item order-price"
    newLineItemPrice.innerHTML = `${price}`
    const newLineItemRestaurantId = document.createElement('span')
    newLineItemRestaurantId.className = "order-item"
    newLineItemRestaurantId.innerHTML = `Restaurant # ${restId}`
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
        updateItemTotal(-1)
        removeButton.parentElement.remove()
    })
    newLineItem.appendChild(newLineItemName)
    newLineItem.appendChild(newLineItemPrice)
    newLineItem.appendChild(newLineItemRestaurantId)

    cart.appendChild(newLineItem)
    updateCartTotal(price)
    updateItemTotal(1)
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

function updateItemTotal(num) {
    curItemTotal = totalItems.innerText
    curNum = parseFloat(curItemTotal)
    curNum += num
    totalItems.innerText = curNum
    return curNum
}
purchase.addEventListener('click', purchaseCart)

function purchaseCart() {
    if (totalItems.innerText == "0") {
        alert(`Cart is currently empty, please pick an item!`)
    } else {
        alert(`Thank you! You've purchased ${totalItems.innerText} items, totaling ${cartTotal.innerText}`)
        totalItems.innerText = "0"
        cartTotal.innerText = "$0.00"
        for (let i = cart.children.length; i > 0; i--) {
            console.log(cart.children)
            console.log(`On ${i.value}`)
            cart.remove(i)
            console.log(`removed ${i}`)
        }
    }
}
