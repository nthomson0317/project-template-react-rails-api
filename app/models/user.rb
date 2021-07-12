class User < ApplicationRecord
    has_secure_password
    has_many :openings

    validates :username, uniqueness: {case_sensitive: false}
    validates :password, length: {in: 5..10}
end
