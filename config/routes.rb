Rails.application.routes.draw do
  root to: 'static_pages#show'
  resources :static_pages, only: [:show]

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :posts
    resources :comments
  end
end
