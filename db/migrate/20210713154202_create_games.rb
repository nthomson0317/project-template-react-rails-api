class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :moves
      t.string :notes
      t.belongs_to :opening, null: false, foreign_key: true

      t.timestamps
    end
  end
end
