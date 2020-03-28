const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate');
const app = express();

app.use(express.json());

app.use(cors());

//Quando a aplicação estiver em produção ficará assim:
/*
app.use(cors({
    origin: 'http://meuendereco.com'
}));
*/

app.use(routes);
app.use(errors());

module.exports = app;