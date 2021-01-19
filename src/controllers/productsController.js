const Knex = require("../database")

module.exports = {

  async index(req, res) {
    const result = await Knex('products');
    return res.json(result);
  }

}