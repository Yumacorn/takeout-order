const restaurantListBtn = document.querySelector('#restaurant-list')
const newRestaurantForm = document.querySelector('#new-restaurant-form')
const restaurantContainer = document.querySelector('#restaurant-container')


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

