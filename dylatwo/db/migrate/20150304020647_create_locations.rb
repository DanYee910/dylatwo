class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :district
      t.integer :fastmin
      t.integer :fastmax
      t.integer :medmin
      t.integer :medmax
      t.integer :slowmin
      t.integer :slowmax
      t.text :flavortext
      t.text :imgtag
      t.timestamps null: false
    end
  end
end
