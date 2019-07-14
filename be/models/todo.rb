require 'rubygems'
require 'active_record'

ActiveRecord::Base.configurations = YAML.load_file('./database.yml')
ActiveRecord::Base.establish_connection(:development)

class Todo < ActiveRecord::Base
  validates :title, presence: true
  validates :status, presence: true
  validates :user_name, presence: true
end
