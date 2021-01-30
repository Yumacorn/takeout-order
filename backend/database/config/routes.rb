Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/restaurants', to: "restaurant#index"
  post '/restaurants', to: "restaurant#create"

end
