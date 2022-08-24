class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :obdb_id, null: false
      t.string :name, null: false
      t.string :type, null: false
      t.string :address, null: false
      t.string :website
      t.string :phone
      t.timestamps null: false
    end
  end
end
