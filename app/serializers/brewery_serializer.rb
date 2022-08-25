class BrewerySerializer < ActiveModel::Serializer
  attributes :obdb_id, :id, :name, :brewery_type, :street, :city, :state, :country, :postal_code, :website_url, :phone
  # has_many :reviews
end
