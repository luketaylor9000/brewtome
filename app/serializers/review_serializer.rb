class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :rating, :title, :body, :created_at, :brewery_id, :user_id, :username

  def username
    username = User.find_by(user_id = user_id)
    username = username.username
  end

end
