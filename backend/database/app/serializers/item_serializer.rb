class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :specialty, :restaurant_id
end
