class Api::V1::BreweriesController < ApiController

  def index
    search = "boston"
    response = BreweriesService.get_breweries(search)
    render json: response
  end
end