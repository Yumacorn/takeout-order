class ItemsController < ApplicationController

    def index
        @items = Item.all
        @restaurant = Restaurant.find_by_id(params[:restaurant_id])
        if (params[:restaurant_id] && @restaurant)
            @items = @restaurant.items
        end
        serialized_data = ItemSerializer.new(@items).serialized_json
        render json: serialized_data
    end

    def create
        @item = Item.create(name: params[:name], price: params[:price], specialty: params[:specialty], restaurant_id: params[:restaurant_id])
        serialized_data = ItemSerializer.new(@item).serialized_json
        render json: serialized_data
    end
end
