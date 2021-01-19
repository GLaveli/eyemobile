const express = require('express');
const routes = express.Router();

const productsController = require('./controllers/productsController')

routes.get('/products',productsController.index)

module.exports = routes;