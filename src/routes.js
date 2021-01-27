const express = require('express');
const routes = express.Router();

const productsController = require('./controllers/productsController');
const ordersController = require('./controllers/ordersControlle');

routes
  /* Products */
  .get('/products', productsController.index)
  .post('/products', productsController.save)
  .put('/products/:id', productsController.update)
  .delete('/products/:id', productsController.delete)
  /* Orders */
  .get('/orders', ordersController.index)


module.exports = routes;