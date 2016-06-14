var bookshelf = require('../db/bookshelf');

var Languages = bookshelf.Model.extend({
  tableName: 'languages',
  puppies: function () {
    return this.belongsToMany('Puppies').through('PuppiesLanguages')
  }
});

module.exports = bookshelf.model('Languages', Languages);
