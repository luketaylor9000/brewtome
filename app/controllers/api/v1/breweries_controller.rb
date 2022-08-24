class Api::V1::BreweriesController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show]
  before_action :authorize_user, only: [:delete]

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

  private

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user_fetch!
    if !user_signed_in?
      render json: { error: "you must be signed in to create a new brewery listing"}, status: 401
    end
  end

end