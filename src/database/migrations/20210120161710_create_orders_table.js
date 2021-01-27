
exports.up = (knex) => {

  return knex.schema.createTable('orders', (table) => {
    table.increments('id')     
    .primary()
    .unsigned();
    table.string('title').notNullable()

    table.integer('id_product')
    .unsigned()
    .index()
    .references('id')
    .inTable('products')
    .onDelete('SET NULL');

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updates_at').defaultTo(knex.fn.now())
  });

};

exports.down = (knex) => {
  return knex.schema.dropTable('orders')
};
