class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :brewery_type
      t.string :street
      t.string :address_2
      t.string :address_3
      t.string :city
      t.string :state
      t.string :county_province
      t.string :postal_code
      t.string :country
      t.string :longitude
      t.string :latitude
      t.string :website_url
      t.string :phone
      t.string :obdb_id
      
      t.timestamps null: false
    end
  end
end
