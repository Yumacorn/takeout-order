class RestaurantController < ApplicationController
    def index
        @restaurants = Restaurant.all

        serialized_data = RestaurantSerializer.new(@restaurants).serialized_json
        render json: serialized_data
    end
end
