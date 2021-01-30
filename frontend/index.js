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
        console.log(restaurant)
    })
})

restaurantListBtn.addEventListener("click", function(e) {
    console.log(e.target)
    // debugger
    if (restaurantContainer.classList.contains("isHidden")) {
        restaurantListBtn.innerHTML = "Hide Restaurants"
        restaurantContainer.className = ""

        fetch('http://localhost:3000/restaurants')
        .then(function(response){
            return response.json()
        })
        .then(function(restaurants){
            // restaurantContainer.innerHTML = restaurants.data[0].attributes.name
            // console.log(restaurants.data[0].attributes.name)
            restaurantContainer.innerText = ''

            restaurants.data.forEach(function(restaurant) {
                const newRestaurant = document.createElement('p')
                newRestaurant.innerText = restaurant.attributes.name
                restaurantContainer.appendChild(newRestaurant)
            })
        })
    } else {
        // debugger
        restaurantListBtn.innerHTML = "Show Restaurants"
        restaurantContainer.className = "isHidden"
        restaurantContainer.innerText = ''
    }
})

