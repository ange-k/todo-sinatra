FROM node:10.15.3 as builder
WORKDIR /work

ADD package.json .
ADD package-lock.json .
ADD webpack.config.js .

RUN npm ci

ADD src src

RUN npx webpack

FROM nginx:stable-alpine as runner
RUN apk add --no-cache bash sed coreutils
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /work/dist public
EXPOSE 80
ENTRYPOINT ["bash", "-c", "nginx -g \"daemon off;\""]
