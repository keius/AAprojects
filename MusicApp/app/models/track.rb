class Track < ApplicationRecord
  # validates :name, :album_id, :ord, :bonus, :lyrics, presence: true

  belongs_to :album

  has_one :band, through: :album, source: :band

end
