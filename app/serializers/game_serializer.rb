class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves, :notes
end
