class RenameOccuranceToOccurrence < ActiveRecord::Migration[5.2]
  def change
  	rename_table :occurances, :occurrences
  end
end
