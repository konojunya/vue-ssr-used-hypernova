FROM hypernova-vue-example/node AS node

FROM ruby:2.5-alpine

ENV BUNDLE_PATH=vendor/bundle \
  RAILS_ENV=production \
  RAILS_SERVE_STATIC_FILES=true \
  PORT=3000

WORKDIR /app
RUN gem install bundler
COPY Gemfile Gemfile.lock ./
RUN apk add --no-cache postgresql-client tzdata
RUN apk add --no-cache --virtual build-dependencies \
  build-base libxml2-dev libxslt-dev postgresql-dev && \
  bundle install && \
  apk del build-dependencies
COPY . /app
COPY --from=node /app/public/frontend /app/public/frontend
COPY --from=node /app/webpack-assets.json /app/webpack-assets.json

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]