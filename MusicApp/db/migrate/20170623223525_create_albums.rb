class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|

      t.string :name, null: false
      t.integer :band_id, null: false
      t.boolean :live, null: false
      t.integer :year, null: false

      t.timestamps
    end
    add_index :albums, [:name, :band_id], unique: true

  end
end
