const express = require('express');
const mongoose = require('mongoose');
const configRoutes = require('./routes.config');
const configServer = require('./server.config');

const nodeEnv = process.env.NODE_ENV || 'development';
const appConfig = require('./app.config')[nodeEnv];

mongoose.connect(appConfig.db);

let app = express();

configServer(app);
configRoutes(app);

app.listen(appConfig.port, onListen);

function onListen(err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Application started on port ${appConfig.port}`);
  }
}
