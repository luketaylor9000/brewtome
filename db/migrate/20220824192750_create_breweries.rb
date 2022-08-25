class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :brewery_type, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.string :postal_code, null: false
      t.string :website_url
      t.string :phone
      t.string :obdb_id
      
      t.timestamps null: false
    end
  end
end
