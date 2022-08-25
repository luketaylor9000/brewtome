class Brewery < ApplicationRecord
  validates :obdb_id, presence: true
  validates :name, presence: true
  validates :brewery_type, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :postal_code, presence: true
end