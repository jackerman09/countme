Rails.application.routes.draw do
  root to: "pages#home"
  namespace :api, defaults: { format: :json } do
    resources :counters, only: [ :index, :show, :update ]
  end
end
