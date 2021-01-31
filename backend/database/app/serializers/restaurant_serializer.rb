class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :fastfood, :items
end
