class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :obdb_id, :name, :type, :address, :website, :phone
  has_many :reviews
end
