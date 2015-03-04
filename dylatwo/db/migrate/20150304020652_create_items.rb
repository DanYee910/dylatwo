class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :spawnarea
      t.text :effect
      t.text :flavortext
      t.text :imgtag
      t.timestamps null: false
    end
  end
end
