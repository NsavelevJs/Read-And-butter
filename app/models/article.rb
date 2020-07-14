class Article < ApplicationRecord
    has_one :tags
    has_and_belongs_to_many :users
end
