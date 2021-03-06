class RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all

        serialized_data = RestaurantSerializer.new(@restaurants).serialized_json
        render json: serialized_data
    end

    def create
        binding.pry
        @restaurant = Restaurant.create(name: params[:name], fastfood: params[:fastfood])
        serialized_data = RestaurantSerializer.new(@restaurant).serialized_json
        render json: serialized_data
    end
end
