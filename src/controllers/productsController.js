const knex = require("../database");
const Knex = require("../database");

module.exports = {

  async index(req, res) {
    const result = await Knex('products');
    return res.json(result);
  },

  async save(req, res, next) {
    try {
      const { name, price } = req.body;

      await knex('products').insert({
        name,
        price
      });

      return res.status(201).send();

    } catch (error) {
      next(error);
    }

  },

  async update(req, res, next) {
    try {
      const { name, price } = req.body;
      const { id } = req.params;

      const resultId = await Knex('products').where({ id });

      if (!resultId.length)
        return res.status(200).send("Este ID não existe");

      await knex('products').update({
        name,
        price
      }).where({ id });

      return res.status(200).send();

    } catch (error) {
      next(error);
    }

  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const resultID = await Knex('products').where({ id });

      if (!resultID.length) {
        console.log(resultID);
        return res.status(200).send("Este ID não existe");
      }

      await knex('products').where({ id }).del();

      return res.status(200).send();

    } catch (error) {
      next(error);
    }

  },

}