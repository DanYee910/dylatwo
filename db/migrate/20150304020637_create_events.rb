class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :effect
      t.text :flavortext
      t.text :imgtag
      t.timestamps null: false
    end
  end
end
