const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/user', UserController.get);
routes.post('/user', UserController.post);

module.exports = routes;