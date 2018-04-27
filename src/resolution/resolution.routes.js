const resolution = require('./resolution.controller');

function registerRoutes(app) {
  app.get('/resolution/', resolution.getAll);
  app.get('/resolution/:id', resolution.get);
  app.post('/resolution/', resolution.create);
  app.post('/resolution/reorder', resolution.reorder);
  app.put('/resolution/:id', resolution.put);
  app.delete('/resolution/:id', resolution.remove);
  app.delete('/resolution/', resolution.removeAll);
};

module.exports = registerRoutes;
