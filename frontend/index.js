const restaurantListBtn = document.querySelector('#restaurant-list')
const newRestaurantForm = document.querySelector('#new-restaurant-form')



newRestaurantForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(newRestaurantForm)

    const input = newRestaurantForm.querySelector("#inputRestaurant")
    console.log(input)
    fetch('http://localhost:3000/restaurants', {
        method: "POST",
        headers: {
            'Content-Type': 'application.json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: input
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(restaurant){
        console.log(restaurant)
    })
})

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

