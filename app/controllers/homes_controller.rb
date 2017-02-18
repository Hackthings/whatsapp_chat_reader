class HomesController < ApplicationController
  def index
    render 'home/index' ,layout: false
  end
end