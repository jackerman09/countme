class Api::CountersController < ApplicationController
	protect_from_forgery with: :null_session

	def index
		@counters = Counter.all
	end

	def show
    @counter = Counter.find(params[:id])
  end

  def update
  	@counter = Counter.find(params[:id])
  	@counter.update_attributes(counter_params)
  end

  def increment
    @counter = Counter.find(params[:id])
    @counter.increment
    render 'counters/show'
  end

  def decrement
    @counter = Counter.find(params[:id])
    @counter.decrement
    render 'counters/show'
  end

  def reset
    @counter = Counter.find(params[:id])
    @counter.reset
    render 'counters/show'
  end

  private

  def counter_params
    params.require(:counter).permit(:id, :name, :count)
  end
end
