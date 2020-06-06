import Knex from 'knex';

// creates table
export async function up(knex: Knex) {
  return knex.schema.createTable('points', table => {
    // create the field id. the id field increments as new lines are added
    // to the table. it's also the primary key
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();

    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    // second param defines a max of 2 characters
    table.string('uf', 2).notNullable();
  });
}

// deletes table
export async function down(knex: Knex) {
  return knex.schema.dropTable('points');
}
