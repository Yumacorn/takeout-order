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