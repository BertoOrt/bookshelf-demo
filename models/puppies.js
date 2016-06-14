var bookshelf = require('../db/bookshelf');

var Puppies = bookshelf.Model.extend({
  tableName: 'puppies',
  languages: function () {
    return this.belongsToMany('Languages').through('PuppiesLanguages')
  }
});

module.exports = bookshelf.model('Puppies', Puppies);
