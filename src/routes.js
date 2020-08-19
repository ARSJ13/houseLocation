const { Router } = require('express');
const SessionController = require('./controllers/SessionController');

const routes = new Router();

routes.post('/session', SessionController.store);

module.exports = routes;