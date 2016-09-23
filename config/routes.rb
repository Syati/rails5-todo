Rails.application.routes.draw do
  root to: 'static_pages#home'
  get 'about', to: 'static_pages#about'
  get 'company', to: 'static_pages#company'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
