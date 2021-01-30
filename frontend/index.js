const restaurantContainer = document.getQuerySelector('#restaurant-container')


fetch('http://localhost:3000/restaurants')
    .then(function(response){
        return response.json()
    })
    .then(function(restaurants){
        // restaurantContainer.innerHTML = restaurants.data[0].attributes.name
        console.log(restaurants.data[0].attributes.name)
    })