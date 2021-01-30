class ItemController < ApplicationController

    def index
        @items = Item.all

        serialized_data = ItemSerializer.new(@items).serialized_json
        render json: serialized_data
    end

    def create
        @item = Item.create(name: params[:name], price: params[:price], specialty: params[:specialty], restaurant_id: params[:restaurant_id])

        serialized_data = ItemSerializer.new(@item).serialized_json
        render json: serialized_data
    end
end
