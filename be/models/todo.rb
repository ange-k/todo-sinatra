require 'rubygems'
require 'active_record'

ActiveRecord::Base.configurations = YAML.load_file('./database.yml')
ActiveRecord::Base.establish_connection(:development)

class Todo < ActiveRecord::Base
end
