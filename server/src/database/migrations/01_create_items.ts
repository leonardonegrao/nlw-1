import Knex from 'knex';

// creates table
export async function up(knex: Knex) {
  return knex.schema.createTable('items', table => {
    // create the field id. the id field increments as new lines are added
    // to the table. it's also the primary key
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

// deletes table
export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}
