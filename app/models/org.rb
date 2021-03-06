class Org < ActiveRecord::Base
  extend Searchable

  validates :name, presence: true
  validates :code, presence: true, length: { in: 3..10 }, uniqueness: { case_sensitive: false }
end
