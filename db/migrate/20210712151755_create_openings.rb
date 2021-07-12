class CreateOpenings < ActiveRecord::Migration[6.1]
  def change
    create_table :openings do |t|
      t.string :name
      t.string :moves
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
