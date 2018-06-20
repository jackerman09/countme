class Counter < ApplicationRecord
	has_many :occurrences

	def current_count
		self.occurrences.is_increment.count - self.occurrences.is_decrement.count
	end

	def increment
		occurrence = self.occurrences.build(is_increment: true)
		count_field = self.count
		if occurrence.save
			self.count = count_field + 1
			self.save
		end
	end

	def decrement
		occurrence = self.occurrences.build(is_increment: false)
		count_field = self.count
		if occurrence.save
			self.count = count_field - 1
			self.save
		end
	end
end
