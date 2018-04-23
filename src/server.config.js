const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

function configServer(app) {
  app.use(compression());
  app.use(methodOverride());
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));
};

module.exports = configServer;
