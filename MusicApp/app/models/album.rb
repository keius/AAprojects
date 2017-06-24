class Album < ApplicationRecord
  validates :name, :band_id, :live, :year, presence: true

  belongs_to :band

  has_many :tracks

end
