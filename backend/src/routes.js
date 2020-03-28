const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const routes = express.Router();

const ongsController = require('./controllers/ongsControllers');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController')

routes.get('/ongs',ongsController.index);
routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),incidentsController.index);
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().length(11),
        city: Joi.string().required().email(),
        uf: Joi.string().required().length(2)
    })
}), ongsController.create);
routes.post('/incidents',incidentsController.create);
routes.post('/sessions',sessionController.create)

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),incidentsController.delete);

module.exports = routes;