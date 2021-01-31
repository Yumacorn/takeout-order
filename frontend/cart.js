let addCartItem = document.getElementsByClassName('add-cart-item')
let removeCartItem = document.getElementsByClassName('remove-cart-item')
const cart= document.querySelector('#order-items')
const cartTotal = document.querySelector('#cart-total')

function addLineItem(item, price, restId) {
    console.log(`"${item}" - ${price} - ${restId}`)
    const newLineItem = document.createElement('div')
    newLineItem.innerHTML = `"${item}" - ${price} - ${restId}`
    const removeButton = document.createElement('button')
    removeButton.className = "remove-cart-item"
    removeButton.innerText = "X"
    newLineItem.appendChild(removeButton)
    removeButton.addEventListener('click', function(event) {
        let removeButton = event.target
        console.log(removeButton)
        removeButton.parentElement.remove()
    })
    cart.appendChild(newLineItem)
    updateCartTotal()
}

function updateCartTotal() {
    
}


//removal of cart items
// for (btn of removeCartItem) {
//     console.log(removeCartItem)
//     btn.addEventListener('click', function(event) {
//         let removeButton = event.target
//         console.log(removeButton)
//         removeButton.remove()
//     })
// }