class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves, :notes
  belongs_to :opening
end
