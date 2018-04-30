FROM node:8.11.1-alpine

LABEL maintainer="haydenbr"
ENV NODE_ENV=development

RUN mkdir /opt/app
WORKDIR /opt/app

COPY docker/package.json yarn.lock ./
RUN yarn

EXPOSE 3000

CMD [ "yarn", "serve" ]
