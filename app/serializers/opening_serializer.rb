class OpeningSerializer < ActiveModel::Serializer
  attributes :id, :name, :moves
  has_one :user
end
