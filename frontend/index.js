const restaurantContainer = document.querySelector('#restaurant-container')
const restaurantListBtn = document.querySelector('#restaurant-list')


console.log(restaurantListBtn)

fetch('http://localhost:3000/restaurants')
    .then(function(response){
        return response.json()
    })
    .then(function(restaurants){
        // restaurantContainer.innerHTML = restaurants.data[0].attributes.name
        console.log(restaurants.data[0].attributes.name)
    })