const path = require('path');
const express = require('express');

const appConfig = {
  development: {
		db: process.env.MONGO_URL || 'mongodb://localhost:27017/new-years',
		port: process.env.PORT || 3000
  },
  production: {}
};

module.exports = appConfig;
