class CreateOccurances < ActiveRecord::Migration[5.2]
  def change
    create_table :occurances do |t|
      t.boolean :is_increment
      t.references :counter, foreign_key: true

      t.timestamps
    end
  end
end
