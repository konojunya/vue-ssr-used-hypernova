require "hypernova/controller_helpers"

Hypernova.configure do |config|
  config.host = "node"
  config.port = 5000
end

ActionController::Base.class_eval do
  include Hypernova::ControllerHelpers

  alias_method :render_vue_component, :render_react_component
  helper_method :render_vue_component
end