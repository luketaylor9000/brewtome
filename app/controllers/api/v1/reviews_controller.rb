class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show]
  before_action :authorize_user, only: [:delete]

  def create
    review = Review.new(review_params)

    brewery_id = params[:brewery_id]

    persisted_brewery = BreweriesService.get_persisted_brewery(brewery_id)
    if persisted_brewery === nil
      persisted_brewery = BreweriesService.create_brewery(brewery_id)
    end

    review.user = current_user
    review.brewery_id = persisted_brewery.id

    if review.save
      render json: review
    else
      binding.pry
      render json: { errors: review.errors.full_messages }, status: 400
    end
  end

  private

  def review_params 
    params.require(:review).permit(:rating, :title, :body, :brewery_id)
  end

  def brewery
    brewery = Brewery.find_by(obdb_id: params[:brewery_id])
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user_fetch!
    if !user_signed_in?
      render json: { error: "you must be signed in to submit a review"}, status: 401
    end
  end

end