class Counter < ApplicationRecord
	has_many :occurences

	def current_count
		self.occurences.is_increment.count - self.occurences.is_decrement.count
	end

	def increment
		self.occurences.build(is_increment: true)
	end

	def decrement
		self.occurences.build(is_increment: false)
	end
end
