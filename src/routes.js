const express = require('express');
const routes = express.Router();

const productsController = require('./controllers/productsController')

routes.get('/products', productsController.index);
routes.post('/products', productsController.save);
routes.put('/products/:id', productsController.update);
routes.delete('/products/:id', productsController.delete);


module.exports = routes;