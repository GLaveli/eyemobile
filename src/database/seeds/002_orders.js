
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          id_product: 5,
          title: 'teste'
        },
      ]);
    });
};
