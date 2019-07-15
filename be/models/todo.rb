require 'dotenv'
require 'erb'
require 'active_record'
require 'yaml'

Dotenv.load
yaml = YAML.load(ERB.new(File.read("./database.yml")).result)

ActiveRecord::Base.configurations = yaml
ActiveRecord::Base.establish_connection(:default)

class Todo < ActiveRecord::Base
  validates :title, presence: true
  validates :status, presence: true
  validates :user_name, presence: true
end
