class Track < ActiveRecord::Base
  belongs_to :album
  has_one :band, through: :album, source: :band

  validates :name, :album_id, :ord, :lyrics, presence: true
  validates :ord, uniqueness: { scope: :album_id }
end
