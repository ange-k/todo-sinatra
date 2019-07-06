class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :status
      t.string :user_name
      t.timestamps
    end
  end
end
