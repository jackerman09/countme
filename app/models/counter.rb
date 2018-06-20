class Counter < ApplicationRecord
	has_many :occurrences

	def calculated_count
		self.occurrences.is_increment.count - self.occurrences.is_decrement.count
	end

	def increment
		occurrence = self.occurrences.build(is_increment: true)
		count = self.count
		if occurrence.save
			self.count = count + 1
			self.save
		end
	end

	def decrement
		occurrence = self.occurrences.build(is_increment: false)
		count = self.count
		if occurrence.save
			self.count = count - 1
			self.save
		end
	end

	def reset
		self.occurrences.destroy_all
		self.count = 0
		self.save
	end
end
