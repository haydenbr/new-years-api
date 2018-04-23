const registerResolutionRoutes = require('./resolution').registerRoutes;

function registerRoutes(app) {
	registerResolutionRoutes(app);
}

module.exports = registerRoutes;
