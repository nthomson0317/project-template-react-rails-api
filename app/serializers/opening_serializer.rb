class OpeningSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves
  has_many :games
end
