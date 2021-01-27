const { query } = require("express");
const knex = require("../database");
const Knex = require("../database");

module.exports = {

  async index(req, res, next) {
    try {
      const { id_product } = req.query

      const query = await Knex('orders')
        .where({ id_product })
        .join('products', 'products.id', '=', 'orders.id_product')
        .select('products.name', 'orders.*')

      const result = await query;

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },


}