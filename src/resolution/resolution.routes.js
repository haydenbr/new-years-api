const resolution = require('./resolution.controller');

function registerRoutes(app) {
  app.get('/resolution/', resolution.getAll);
  app.get('/resolution/:id', resolution.get);
  app.post('/resolution/', resolution.create);
  app.put('/resolution/:id', resolution.put);
  app.delete('/resolution/:id', resolution.remove);
};

module.exports = registerRoutes;
