var bookshelf = require('../db/bookshelf');

var Puppies = bookshelf.Model.extend({
  tableName: 'puppies',
});

module.exports = Puppies;
