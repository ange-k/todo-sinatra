require 'sinatra'
require 'json'
require './models/todo.rb'

get '/todos' do
  todos = Todo.all
  todos.to_json
end

post '/todo' do
  title     = params['title']
  status    = params['status']
  user_name = params['user_name']
  todo = Todo.new(title: title, status: status, user_name: user_name)
  if todo.save 
    status 200
  else
    status 400
  end
end
