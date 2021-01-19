
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'calzone de frango', price: 10.00 },
        { name: 'laranja', price: 15.00 },
        { name: 'bolo', price: 20.00 },
        { name: 'alcatra ao molho', price: 30.00 },
        { name: 'lazanha', price: 40.00 },
        { name: 'combo familia 1', price: 50.00 },
        { name: 'combo familia 2', price: 60.00 },
        { name: 'pizza de camarão', price: 69.90 },
        { name: 'salmão grelhado', price: 70.00 },
        { name: 'Lagosta', price: 80.00 },
      ]);
    });
};
