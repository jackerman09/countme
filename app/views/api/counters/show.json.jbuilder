json.extract! @counter, :id, :name, :count
json.occurrences @counter.occurrences, :is_increment