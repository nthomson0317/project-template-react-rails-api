class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :age, :profile_pic, :country, :username, :password_digest

end
