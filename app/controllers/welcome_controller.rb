class WelcomeController < ApplicationController
  def index
    @events = Event.all
    @locations = Location.all
    @items = Item.all
    @recipes = Recipe.all
  end
end
