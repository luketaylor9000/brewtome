class Review < ApplicationRecord
  validates :rating, presence: true
  validates :title, presence: true
  validates :body, presence: true
  
  belongs_to :brewery
  belongs_to :user
end