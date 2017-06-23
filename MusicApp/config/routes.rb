Rails.application.routes.draw do
  root to: redirect("/bands")

  resources :bands do
    resources :albums, only: [:new]
  end

  resources :albums, only: [:create, :show, :destroy, :edit, :update] do
    resources :tracks, only: [:new]
  end

  resources :users, only: [:new, :create, :show]
  
  resources :tracks, only: [:create, :show, :destroy, :edit, :update]

  resource :session, only: [:new, :create, :destroy]
end
