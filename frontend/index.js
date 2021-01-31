const restaurantListBtn = document.querySelector('#restaurant-list')
const newRestaurantForm = document.querySelector('#new-restaurant-form')
const restaurantContainer = document.querySelector('#restaurant-container')

const itemListBtn = document.querySelector('#item-list')
const newItemForm = document.querySelector('#new-item-form')
const itemContainer = document.querySelector('#item-container')
let selectedItemsRestId = document.querySelector('#display-items-belong-to-rest')

function renderRestaurants() {
    fetch('http://localhost:3000/restaurants')
    .then(function(response){
        return response.json()
    })
    .then(function(restaurants){
        restaurantContainer.innerText = ''

        restaurants.data.forEach(function(restaurant) {
            const newRestaurant = document.createElement('p')
            // debugger
            newRestaurant.innerText = `${restaurant.id}. ${restaurant.attributes.name} // Fastfood Spot: ${restaurant.attributes.fastfood ? 'Yes':'No'} // Menu Items: ${restaurant.attributes.items.length}`
            restaurantContainer.appendChild(newRestaurant)
        })
    })
}

newRestaurantForm.addEventListener("submit", function(e) {
    e.preventDefault()  
    const inputRest = document.querySelector("#new-rest-name").value
    const isFastfood = document.querySelector("#new-rest-fastfood-bool")

    fetch('http://localhost:3000/restaurants', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({

            name: inputRest,
            fastfood: isFastfood.checked
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(restaurant){
            if (!restaurantContainer.classList.contains("isHidden")) {
                const newRestaurant = document.createElement('p')
                newRestaurant.innerText = `${restaurant.data.id}. ${restaurant.data.attributes.name} // Fastfood Spot: ${restaurant.data.attributes.fastfood ? 'Yes':'No'}`
                restaurantContainer.appendChild(newRestaurant)
            }
    })
})

restaurantListBtn.addEventListener("click", function(e) {
    if (restaurantContainer.classList.contains("isHidden")) {
        restaurantListBtn.innerHTML = "Hide Restaurants"
        restaurantContainer.className = ""
        renderRestaurants()
    } else {
        restaurantListBtn.innerHTML = "Show Restaurants"
        restaurantContainer.className = "isHidden"
        restaurantContainer.innerText = ''
    }
})


newItemForm.addEventListener("submit", function(e) {
    e.preventDefault()  
    
    const inputItem= document.querySelector("#new-item-name").value
    const inputItemPrice= document.querySelector("#new-item-price").value
    const isSpecialty = document.querySelector("#new-item-specialty-bool")
    const restId = document.querySelector("#new-item-belong-to-rest").value
    // debugger
    // console.log(inputItemPrice)
    fetch(`http://localhost:3000/restaurants/${restId}/items`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: inputItem,
            price: inputItemPrice,
            specialty: isSpecialty.checked,
            restaurant_id: restId
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(item){
            // if (!itemContainer.classList.contains("isHidden")) {
            if (!listHidden(itemContainer)) {
                const newItem = document.createElement('div')
                newItem.className="item-container"
                const newItemName = document.createElement('p')
                newItemName.innerText = `${item.data.id}. ${item.data.attributes.name}`
                newItemName.style="width: 300px; float:left"
                console.log(item)

                const newItemDescrip = document.createElement('p')
                newItemDescrip.innerText = `// Price: ${parseFloat(item.data.attributes.price).toFixed(2)} Specialty: ${item.data.attributes.speciality ? 'Yes':'No'}`
                newItemDescrip.style="width: 200px; float:left"

                const newItemAddCart = document.createElement('button')
                newItemAddCart.className="add-cart-item"
                // newItemAddCart.addEventListener('click', function(event) {
                //     let addButton = event.target.parentNode
                //     console.log(addButton.parentElement.value)
                // })
                newItemAddCart.addEventListener('click', function(event) {
                    let addButton = event.target
                    console.log(addButton.parentElement)
                    addItemToCart = addButton.parentElement.children[0].innerText
                    addItemPriceToCart = addButton.parentElement.children[1].innerText.split(" ")[0]
                    addItemRestIdToCart = addButton.parentElement.children[1].innerText.split(" ")[4]
                })

                newItemAddCart.innerText = 'Add To Cart'
                newItem.appendChild(newItemName)
                newItem.appendChild(newItemDescrip)
                newItem.appendChild(newItemAddCart)
                itemContainer.appendChild(newItem)
            }
            console.log(item)
    })
})

// function itemListHidden() {
//     return (itemContainer.classList.contains("isHidden")) ? true : false
// }

function listHidden(container) {
    return (container.classList.contains("isHidden")) ? true : false
}

function renderItems() {
    selectedRestId = selectedItemsRestId.value
        fetch(`http://localhost:3000/restaurants/${selectedRestId}/items`)
        .then(function(response){
            return response.json()
        })
        .then(function(items){
            itemContainer.innerText = ''
            items.data.forEach(function(item) {
                const newItem = document.createElement('div')
                newItem.className="item-container"
                const newItemName = document.createElement('p')
                newItemName.innerText = `${item.id}. ${item.attributes.name}`
                newItemName.style="width: 300px; float:left"

                const newItemDescrip = document.createElement('p')
                newItemDescrip.className="itemDescrip"
                newItemDescrip.innerText = `$${parseFloat(item.attributes.price).toFixed(2)} Specialty: ${item.attributes.speciality ? 'Yes':'No'} Restaurant: ${item.attributes.restaurant_id}`
                newItemDescrip.style="width: 200px; float:left"

                const newItemAddCart = document.createElement('button')
                newItemAddCart.className="add-cart-item"
                newItemAddCart.addEventListener('click', function(event) {
                    let addButton = event.target
                    console.log(addButton.parentElement)
                    addItemToCart = addButton.parentElement.children[0].innerText
                    addItemPriceToCart = addButton.parentElement.children[1].innerText.split(" ")[0]
                    addItemRestIdToCart = addButton.parentElement.children[1].innerText.split(" ")[4]
                })

                newItemAddCart.innerText = 'Add To Cart'
                newItem.appendChild(newItemName)
                newItem.appendChild(newItemDescrip)
                newItem.appendChild(newItemAddCart)
                itemContainer.appendChild(newItem)
            })
        })
}

selectedItemsRestId.addEventListener("change", function(e) {
    console.log('You selected: ', this.value);
    if (!listHidden(itemContainer)) {
        renderItems()
    }
})

itemListBtn.addEventListener("click", function(e) {
    if(listHidden(itemContainer)){
        itemListBtn.innerHTML = "Hide Items"
        itemContainer.className = ""
        renderItems()
    } else {
        itemListBtn.innerHTML = "Show Item"
        itemContainer.className = "isHidden"
        itemContainer.innerText = ''
    }
})

