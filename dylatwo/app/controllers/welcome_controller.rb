class WelcomeController < ApplicationController
  def index
    @events = Event.all
    @locations = Location.all
    @items = Item.all
  end
end
