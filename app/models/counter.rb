class Counter < ApplicationRecord
	has_many :occurrences

	def current_count
		self.occurrences.is_increment.count - self.occurrences.is_decrement.count
	end

	def increment
		self.occurrences.create(is_increment: true)
	end

	def decrement
		self.occurrences.create(is_increment: false)
	end
end
