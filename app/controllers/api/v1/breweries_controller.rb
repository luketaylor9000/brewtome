class Api::V1::BreweriesController < ApiController

  def index
    search = "Boston"
    response = BreweriesService.get_breweries(search)
    render json: response
  end

  def show
    brewery = Brewery.find(params[:id])
    render json: brewery
  end

end