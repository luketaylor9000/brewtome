class UserSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :username, :email
end
