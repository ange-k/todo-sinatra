FROM ruby:2.5.3
WORKDIR /src
RUN export BUNDLE_GEMFILE=./Gemfile
COPY . .

RUN gem install foreman
RUN bundle

ENTRYPOINT ["foreman", "start", "-p", "4567"] 
