# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rest_a = Restaurant.create(name: "Spice Workshop", fastfood: false)
rest_b = Restaurant.create(name: "Sushi Central", fastfood: false)
rest_c = Restaurant.create(name: "Billy's Burger Joint", fastfood: true)
rest_d = Restaurant.create(name: "Aman's Aristan Bagels", fastfood: true)
rest_e = Restaurant.create(name: "Adela's Fave Coffee Spot", fastfood: false)

item_a = Item.create(name: "Hazlenut Coffee", price: 12.0, specialty: true, restaurant_id: 5)
item_b = Item.create(name: "Duck Bagel", price: 5.0, specialty: true, restaurant_id: 4)
item_c = Item.create(name: "Walnut Shrimp with Honey Mayo Glaze", price: 12.99, specialty: true, restaurant_id: 1)
item_d = Item.create(name: "Sushi Boat for 2", price: 32.49, specialty: true, restaurant_id: 2)
item_e = Item.create(name: "Chirashi Platter", price: 28.99, specialty: false, restaurant_id: 2)
item_f = Item.create(name: "Triple Krabby Patty Burger Deluxe", price: 11.99, specialty: true, restaurant_id: 3)
item_g = Item.create(name: "Cold Brew", price: 3.99, specialty: false, restaurant_id: 5)
item_h = Item.create(name: "Sesame Chicken", price: 9.99, specialty: true, restaurant_id: 1)
item_i = Item.create(name: "Cold Drunken Noodles", price: 6.99, specialty: false, restaurant_id: 1)
item_j = Item.create(name: "Lo Mein with Chicken", price: 10.99, specialty: true, restaurant_id: 1)
