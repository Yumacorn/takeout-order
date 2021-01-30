const restaurantListBtn = document.querySelector('#restaurant-list')


restaurantListBtn.addEventListener("click", function(e) {
    fetch('http://localhost:3000/restaurants')
    .then(function(response){
        return response.json()
    })
    .then(function(restaurants){
        // restaurantContainer.innerHTML = restaurants.data[0].attributes.name
        // console.log(restaurants.data[0].attributes.name)
        const restaurantContainer = document.querySelector('#restaurant-container')
        restaurantContainer.innerText = ''

        restaurants.data.forEach(function(restaurant) {
            const newRestaurant = document.createElement('p')
            newRestaurant.innerText = restaurant.attributes.name
            restaurantContainer.appendChild(newRestaurant)
        })
    })
})

