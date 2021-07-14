class OpeningSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves
  belongs_to :user
  has_many :games
end
