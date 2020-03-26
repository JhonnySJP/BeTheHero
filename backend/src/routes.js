const express = require('express');

const routes = express.Router();

const ongsController = require('./controllers/ongsControllers');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController')

routes.get('/ongs',ongsController.index);
routes.get('/incidents',incidentsController.index);
routes.get('/profile',profileController.index);

routes.post('/ongs', ongsController.create);
routes.post('/incidents',incidentsController.create);
routes.post('/sessions',sessionController.create)

routes.delete('/incidents/:id',incidentsController.delete);

module.exports = routes;