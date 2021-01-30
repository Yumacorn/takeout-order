const restaurantListBtn = document.querySelector('#restaurant-list')
const newRestaurantForm = document.querySelector('#new-restaurant-form')
const restaurantContainer = document.querySelector('#restaurant-container')

const itemListBtn = document.querySelector('#item-list')
const newItemForm = document.querySelector('#new-item-form')
const itemContainer = document.querySelector('#item-container')


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

        fetch('http://localhost:3000/restaurants')
        .then(function(response){
            return response.json()
        })
        .then(function(restaurants){
            restaurantContainer.innerText = ''

            restaurants.data.forEach(function(restaurant) {
                const newRestaurant = document.createElement('p')
                newRestaurant.innerText = `${restaurant.id}. ${restaurant.attributes.name} // Fastfood Spot: ${restaurant.attributes.fastfood ? 'Yes':'No'}`
                restaurantContainer.appendChild(newRestaurant)
            })
        })
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
    
    console.log(inputItemPrice)
    fetch('http://localhost:3000/items', {
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
        console.log(inputItemPrice.value)

            if (!itemContainer.classList.contains("isHidden")) {
                const newItem = document.createElement('p')
                newItem.innerText = `${item.data.id}. ${item.data.attributes.name} // Specialty: ${item.data.attributes.specialty ? 'Yes':'No'}`
                itemContainer.appendChild(newItem)
            }
            console.log(inputItemPrice)
            console.log(inputItemPrice.value)

    })
})

itemListBtn.addEventListener("click", function(e) {
    if (itemContainer.classList.contains("isHidden")) {
        itemListBtn.innerHTML = "Hide Items"
        itemContainer.className = ""

        fetch('http://localhost:3000/items')
        .then(function(response){
            return response.json()
        })
        .then(function(items){
            itemContainer.innerText = ''
            items.data.forEach(function(item) {
                const newItem = document.createElement('p')
                newItem.innerText = `${item.id}. ${item.attributes.name} // Price: ${parseFloat(item.attributes.price).toFixed(2)} Specialty: ${item.attributes.speciality ? 'Yes':'No'}`
                itemContainer.appendChild(newItem)
            })
        })
    } else {
        itemListBtn.innerHTML = "Show Item"
        itemContainer.className = "isHidden"
        itemContainer.innerText = ''
    }
})

