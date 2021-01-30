let addCartItem = document.getElementsByClassName('add-cart-item')
let removeCartItem = document.getElementsByClassName('remove-cart-item')



//removal of cart items
for (btn of removeCartItem) {
    btn.addEventListener('click', function(event) {
        let removeButton = event.target
        console.log(removeButton)
        removeButton.remove()
    })
}