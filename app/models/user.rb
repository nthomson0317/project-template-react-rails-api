class User < ApplicationRecord
    has_secure_password
    has_many :openings
    has_many :games, through: :openings

    validates :username, uniqueness: {case_sensitive: false}
    validates :password, length: {in: 5..10}
end
