FROM node:8.11.1-alpine

LABEL maintainer="haydenbr"
ENV NODE_ENV=production

RUN mkdir /opt/app
WORKDIR /opt/app

COPY docker/package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY src src

EXPOSE 80

CMD [ "node", "./src/app.js" ]
