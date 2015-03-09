class WelcomeController < ApplicationController
  def index
    gon.events = Event.all
    gon.locations = Location.all
    gon.items = Item.all
    gon.recipes = Recipe.all
  end
end
