class ItemsController < ApplicationController

    def index
        @items = Item.all

        serialized_data = ItemSerializer.new(@items).serialized_json
        render json: serialized_data
    end

    def create
        # byebug
        @item = Item.create(name: params[:name], price: params[:price], specialty: params[:specialty], restaurant_id: params[:restaurant_id])
        byebug
        serialized_data = ItemSerializer.new(@item).serialized_json
        render json: serialized_data
    end
end
