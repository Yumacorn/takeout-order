const restaurantListBtn = document.querySelector('#restaurant-list')
const newRestaurantForm = document.querySelector('#new-restaurant-form')

console.log(newRestaurantForm)
newRestaurantForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e.target)
    console.log("ji")

})
console.log("xyz")

console.log(newRestaurantForm)


// newRestaurantForm.addEventListener("submit", function(e) {
//     console.log(e.target)


    // console.log(newRestaurantForm)

    // const input = document.querySelector("#inputRestaurant").value
    // console.log(input)
    // fetch('http://localhost:3000/restaurants', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: input
    //     })
    // })
    // .then(function(response) {
    //     return response.json()
    // })
    // .then(function(restaurant){
    //     console.log(restaurant)
    // })
// })

restaurantListBtn.addEventListener("click", function(e) {
    console.log(e.target)
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

