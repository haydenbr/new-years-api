const path = require('path');
const express = require('express');

const appConfig = {
  development: {
		db: 'mongodb://localhost:27017/person-test',
		port: process.env.PORT || 3000
  },
  production: {}
};

module.exports = appConfig;
