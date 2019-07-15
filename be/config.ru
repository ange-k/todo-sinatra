require 'rubygems'
require 'bundler'
Bundler.require
require './todo'

run Sinatra::Application
