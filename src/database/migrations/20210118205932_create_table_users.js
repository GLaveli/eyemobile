
exports.up = (knex) => {

  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    .primary()
    .unsigned();
    table.string('name').notNullable()
    table.double('price').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updates_at').defaultTo(knex.fn.now())
  });

};

exports.down = (knex) => {
  return knex.schema.dropTable('products')
};
