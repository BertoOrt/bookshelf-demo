var bookshelf = require('../db/bookshelf');

var PuppiesLanguages = bookshelf.Model.extend({
  tableName: 'puppies_languages',
  puppies: function () {
    return this.hasMany('Puppies')
  },
  puppies() {
    return this.belongsTo('Puppies');
  },

  successCriterion() {
    return this.belongsTo('Languages');
  },
});

module.exports = bookshelf.model('PuppiesLanguages', PuppiesLanguages);
