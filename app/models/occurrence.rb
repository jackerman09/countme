class Occurrence < ApplicationRecord
  belongs_to :counter

  scope :is_increment, -> { where(is_increment: true)}
  scope :is_decrement, -> { where(is_increment: false)}
end
