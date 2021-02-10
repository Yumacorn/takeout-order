Rails.application.routes.draw do
  # get '/restaurants', to: "restaurant#index"
  # post '/restaurants', to: "restaurant#create"

  # get '/items', to: "item#index"
  # post '/items', to: "item#create"

  resources :restaurants do
    resources :items
  end

  resources :items, only: [:destroy]

end
