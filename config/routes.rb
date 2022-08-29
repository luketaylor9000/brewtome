Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  get '/breweries', to: "homes#index"
  get '/breweries/new', to: "homes#auth"
  get '/breweries/:id', to: "homes#index"
  get '/api/v1/breweries/saved_breweries', to: "api/v1/breweries#saved_breweries"

  namespace :api do
    namespace :v1 do
      resources :breweries, only: [:index, :show, :create, :saved_breweries] do
        resources :reviews, only: [:create]
      end
    end
  end
end
