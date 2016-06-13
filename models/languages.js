var bookshelf = require('../db/bookshelf');

var Languages = bookshelf.Model.extend({
  tableName: 'languages',
});

module.exports = Languages;
