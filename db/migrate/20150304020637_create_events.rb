class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :effecttext
      t.string :effect1
      t.integer :val1
      t.string :effect2
      t.integer :val2
      t.text :flavortext
      t.text :imgtag
      t.timestamps null: false
    end
  end
end
