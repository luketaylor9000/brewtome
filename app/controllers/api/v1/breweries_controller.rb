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

  #CHECK IF BREWERY ALREADY EXISTS BEFORE GOING TO NEW BREWERY SHOW PAGE
  #IF EXISTS THEN RENDER THE EXISTING SHOW PAGE FOR THAT BREWERY
  
  # def show 
  #   brewery = params[:id]
  #   found_brewery = Brewery.find_by(open_brewery_id: brewery)

  #   if found_brewery.blank?
  #     response = BreweriesService.get_brewery(brewery)
  #     render json: response
  #   else 
  #     render json: found_brewery
  #     # note: make brewery serializer later
  #   end
    
  # end

  # # Review.create(...., user: current_user)

end