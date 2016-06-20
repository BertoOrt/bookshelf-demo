
exports.up = function(knex, Promise) {
  return knex.schema.table('puppies', function (table) {
    table.string('image');
    table.text('bio');
    table.integer('year');
  }).then(function () {
    return knex.schema.table('languages', function (table) {
      table.string('image');
      table.text('bio');
      table.integer('year');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('puppies', function (table) {
    table.dropColumn('image');
    table.dropColumn('employed');
    table.dropColumn('bio');
    table.dropColumn('year');
  }).then(function () {
    return knex.schema.table('languages', function (table) {
      table.dropColumn('image');
      table.dropColumn('bio');
      table.dropColumn('year');
    })
  })
};
