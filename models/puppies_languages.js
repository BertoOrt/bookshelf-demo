var bookshelf = require('../db/bookshelf');

var PuppiesLanguages = bookshelf.Model.extend({
  tableName: 'puppies_languages',
  puppies: function () {
    return this.hasMany('Puppies')
  },
  languages: function () {
    return this.hasMany('Languages')
  }
});

module.exports = bookshelf.model('PuppiesLanguages', PuppiesLanguages);
