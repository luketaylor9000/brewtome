class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :body, :created_at, :brewery_id, :user_id
end
