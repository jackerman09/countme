Rails.application.routes.draw do
  root to: "pages#home"
  namespace :api, defaults: { format: :json } do
    resources :counters, only: [:index, :show, :update]  do
    	member do
    		post 'increment'
    		post 'decrement'
    		post 'reset'
    	end
    end
  end
end
