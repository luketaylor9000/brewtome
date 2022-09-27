class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :rating, :title, :body, :created_at, :brewery_id, :user_id, :username

  def username
    user = User.find(object.user_id)
    username = user.username
  end

end