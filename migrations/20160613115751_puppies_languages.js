
exports.up = function(knex, Promise) {
  return knex.schema.createTable('puppies_languages', function (table) {
    table.increments();
    table.integer('puppy_id').unsigned().references('id').inTable('puppies').onDelete('cascade')
    table.integer('language_id').unsigned().references('id').inTable('languages').onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('puppies_languages');
};
