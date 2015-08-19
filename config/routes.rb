Rails.application.routes.draw do

  get 'client/index'

  get 'home' => 'home#index'
  get 'brand' => 'orgs#orgs'
  get 'realm' => 'orgs#orgs'
  get 'jobs' => 'orgs#orgs'
  get 'clients' => 'clients#index'
  
  post 'orgs' => 'orgs#create'
  delete 'orgs' => 'orgs#destroy'
  put 'orgs' => 'orgs#update'
 
 post 'clients' => 'clients#create'
  delete 'clients' => 'clients#destroy'
  put 'clients' => 'clients#update'
 
  get 'prosesses' => 'prosesses#index'
  post 'prosesses' => 'prosesses#create'
  delete 'prosesses' => 'prosesses#destroy'
  put 'prosesses' => 'prosesses#update'
  
    get 'communications' => 'communications#index'
  post 'communications' => 'communications#create'
  delete 'communications' => 'communications#destroy'
  put 'communications' => 'communications#update'

  get 'signup', to: 'admin/users#new', as: 'signup'
  get 'login', to: 'sessions#index', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  
  #get 'help'    => 'static_pages#help'
  #get 'about'   => 'static_pages#about'
  #get 'contact' => 'static_pages#contact'
  
  scope :api do
    resources :orgs, defaults: {format: 'json'}
  end
  
  scope :api do
      resources :prosesses, defaults: {format: 'json'}
  end
  scope :api do
      resources :communications, defaults: {format: 'json'}
  end
  
  scope :api do
      resources :clients, defaults: {format: 'json'}
  end
   
  resources :users
  resources :orgs
  resources :sessions
  resources :prosesses
  resources :communications
   resources :clients
  
  namespace :admin do
  	get '', to: 'dashboard#index', as: '/'
  	resources :users
  end

  resources :widgets
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  root :to => 'home#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
