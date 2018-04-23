FROM node:8.11.1-alpine

LABEL maintainer="haydenbr"
ENV NODE_ENV=production

RUN mkdir /opt/app
WORKDIR /opt/app

ADD docker/package.json package.json
ADD yarn.lock yarn.lock
RUN yarn && yarn cache clean

EXPOSE 3000

CMD [ "node", "./src/app.js" ]
