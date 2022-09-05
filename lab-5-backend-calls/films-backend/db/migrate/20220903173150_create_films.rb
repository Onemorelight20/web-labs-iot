class CreateFilms < ActiveRecord::Migration[7.0]
  def change
    create_table :films do |t|
      t.string :title
      t.integer :length_of_film
      t.integer :reviews_amount

      t.timestamps
    end
  end
end
