/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
      table.increments('id').primary();  // Primary key, auto-increments
      table.string('name').notNullable();  // Name column, which cannot be null
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items');  // Drop the items table if it exists
  };
  
