require 'sinatra'
require 'json'

get '/hello' do
  message = {
    msg: "はろーわーるど"
  }
  message.to_json
end
