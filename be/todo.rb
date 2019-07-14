require 'sinatra'
require 'json'
require './models/todo.rb'

# オートリロード未対応.

get '/api/todos' do
  todos = Todo.all
  todos.to_json
end

post '/api/todo' do
  p params
  title     = params['title']
  status    = params['status']
  user_name = params['user_name']
  todo = Todo.new(title: title, status: status, user_name: user_name)
  if todo.save 
    status 200
    return todo.to_json
  else
    status 400
  end
end
