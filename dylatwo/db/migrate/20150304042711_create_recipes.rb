class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :start
      t.integer :tools
      t.text :materials
      t.text :effect
      t.text :flavortext
      t.timestamps null: false
    end
  end
end
