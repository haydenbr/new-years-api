const person = require('./person.controller');

function registerRoutes(app) {
  app.get('/person/', person.getAll);
  app.get('/person/:id', person.get);
  app.post('/person/', person.create);
  app.put('/person/:id', person.put);
  app.delete('/person/:id', person.remove);
};

module.exports = registerRoutes;
