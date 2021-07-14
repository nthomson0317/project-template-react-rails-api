class OpeningSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves
  has_one :user
  has_many :games
end
