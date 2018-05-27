class Api::CountersController < ApplicationController
	def show
    @counter = Counter.find(params[:id])
  end
end
