Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/restaurants', to: "restaurant#index"
  # post '/restaurants', to: "restaurant#create"

  # get '/items', to: "item#index"
  # post '/items', to: "item#create"

  resources :restaurants do
    resources :items
  end

  resources :items, only: [:destroy]

end
