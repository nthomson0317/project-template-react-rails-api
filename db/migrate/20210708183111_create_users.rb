class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :rating
      t.integer :age
      t.string :profile_pic
      t.string :country
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
