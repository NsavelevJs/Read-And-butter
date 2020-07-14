class AddTitleToTag < ActiveRecord::Migration[6.0]
  def change
    add_column :tags, :title, :string
  end
end
