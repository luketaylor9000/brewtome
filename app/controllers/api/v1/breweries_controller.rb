class Api::V1::BreweriesController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show, :saved_breweries]
  before_action :authorize_user, only: [:delete]

  def index
    search = params[:search_query]
    response = BreweriesService.get_breweries(search)
    render json: response, adapter: nil
  end

  def show
    brewery = params[:id]
    found_brewery = Brewery.find_by(obdb_id: brewery)

    if found_brewery.blank?

      response = BreweriesService.get_brewery(brewery)
      # cleaned_up_data = BreweryAPISerializer.new(response)
      render json: { brewery: response }
    else
      # binding.pry
      render json: found_brewery
      # binding.pry
    end
  end

  def create
    new_brewery_params = brewery_params
    new_brewery_params["obdb_id"] = params[:id]
    brewery = Brewery.new(new_brewery_params)
    if brewery.save
      render json: brewery
    else
      render json: { errors: brewery.errors.full_messages }, status: 400
    end
  end

  def saved_breweries
    persisted_breweries = Brewery.all
    render json: persisted_breweries
  end

  #CHECK IF BREWERY ALREADY EXISTS BEFORE GOING TO NEW BREWERY SHOW PAGE
  #IF EXISTS THEN RENDER THE EXISTING SHOW PAGE FOR THAT BREWERY

  # def show 
  #   brewery = params[:id]
  #   found_brewery = Brewery.find_by(open_brewery_id: brewery)

  #   if found_brewery.blank?
  #     response = BreweriesService.get_brewery(brewery)
  #     render json: response
  #   else q
  #     render json: found_brewery
  #     # note: make brewery serializer later
  #   end
    
  # end

  # # Review.create(...., user: current_user)

  private
  
  def brewery_params
    params.require(:brewery).permit(:obdb_id, :name, :brewery_type, :street, :city, :state, :country, :postal_code, :website_url, :phone)
  end

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