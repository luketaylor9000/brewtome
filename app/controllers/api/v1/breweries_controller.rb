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
      logo = BreweriesService.get_brewery_logo(response["website_url"])
      response[:logo] = logo
      response[:reviews] = []
      render json: { brewery: response }
    else
      logo = BreweriesService.get_brewery_logo(found_brewery["website_url"])
      found_brewery[:logo] = logo
      render json: found_brewery
    end
  end

  def saved_breweries
    persisted_breweries = Brewery.all
    render json: persisted_breweries
  end

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