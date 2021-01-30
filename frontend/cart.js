let addCartItem = document.getElementsByClassName('add-cart-item')
let removeCartItem = document.getElementsByClassName('remove-cart-item')

for (btn of addCartItem) {
    btn.addEventListener('click', function(event) {
        let addButton = event.target
        console.log(addButton)
        console.log(addButton.parentElement.value)
    })
}

//removal of cart items
for (btn of removeCartItem) {
    btn.addEventListener('click', function(event) {
        let removeButton = event.target
        console.log(removeButton)
        removeButton.remove()
    })
}