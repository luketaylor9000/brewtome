Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  get '/breweries', to: "homes#index"
  get '/breweries/:id', to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :breweries, only: [:index, :show]
    end
  end
end
