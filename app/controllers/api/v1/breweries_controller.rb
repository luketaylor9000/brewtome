class Api::V1::BreweriesController < ApiController

  # def index
  #   search = "Boston"
  #   response = BreweriesService.get_breweries_by_city(search)
  #   render json: response
  # end

  def index
    search = params[:search_query]
    response = BreweriesService.get_breweries(search)
    render json: response
  end

  def show
    brewery = params[:id]
    response = BreweriesService.get_brewery(brewery)
    render json: response
  end

end