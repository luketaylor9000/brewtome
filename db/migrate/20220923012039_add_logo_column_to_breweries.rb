class AddLogoColumnToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :logo, :string
  end
end
