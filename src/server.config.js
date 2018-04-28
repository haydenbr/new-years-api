const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

function configServer(app) {
  app.use(compression());
  app.use(methodOverride());
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(morgan('dev'));
};

module.exports = configServer;
