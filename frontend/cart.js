let addCartItem = document.getElementsByClassName('add-cart-item')
let removeCartItem = document.getElementsByClassName('remove-cart-item')

console.log(addCartItem)
// for (btn of addCartItem) {
//     console.log(addCartItem)
//     btn.addEventListener('click', function(event) {
//         debugger
//         let addButton = event.target
//         // console.log(addButton)
//         console.log(addButton.parentElement.value)
//     })
// }

//removal of cart items
for (btn of removeCartItem) {
    console.log(removeCartItem)
    btn.addEventListener('click', function(event) {
        let removeButton = event.target
        console.log(removeButton)
        removeButton.remove()
    })
}