class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves, :notes, :opening_id
end
