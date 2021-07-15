class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves, :notes, :opening_id
  # belongs_to :opening
end
