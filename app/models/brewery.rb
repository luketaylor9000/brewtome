class Brewery < ApplicationRecord
  validates :obdb_id, presence: true
  validates :name, presence: true
  validates :type, presence: true
  validates :address, presence: true
end