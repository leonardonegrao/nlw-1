import Knex from 'knex';

// creates table
export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', table => {
    // create the field id. the id field increments as new lines are added
    // to the table. it's also the primary key
    table.increments('id').primary();
    table.integer('point_id').notNullable().references('id').inTable('points');
    table.integer('item_id').notNullable().references('id').inTable('items');
  });
}

// deletes table
export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}
