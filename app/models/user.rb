class User < ApplicationRecord
    has_secure_password
  validates :password, length: { minimum: 6 }, on: :create
  validates :username, presence: true, uniqueness: true

  has_and_belongs_to_many :articles
end
