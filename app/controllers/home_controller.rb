class HomeController < ApplicationController
  around_action :hypernova_render_support
  def index
    @user = {
      :name => "Junya"
    }
  end
end