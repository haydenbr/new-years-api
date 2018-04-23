const registerPersonRoutes = require('./person').registerRoutes;

function registerRoutes(app) {
	registerPersonRoutes(app);
}

module.exports = registerRoutes;
