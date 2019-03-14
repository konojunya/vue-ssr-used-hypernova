Rails.application.routes.draw do
  root "home#index"
  get "/hoge", to: "home#hoge"
end
