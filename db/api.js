var Puppies = require('../models').puppies;
var Languages = require('../models').languages;
var PuppiesLanguages = require('../models').puppies_languages;

module.exports = {
  Puppies: {
    get: function (id) {
      if (id) {
        return Puppies.where({id: id}).fetch({withRelated: 'languages'}).then(function (collection) {
          return collection.toJSON();
        })
      }
      return Puppies.forge().orderBy('name', 'ASC').fetchAll({withRelated: 'languages'}).then(function (collection) {
        return collection.toJSON();
      })
    },
    insert: function (data) {
      return Puppies.forge(data).save();
    },
    destroy: function (id, language_id) {
      if (language_id) {
        var ids = {
          puppy_id: id,
          language_id: language_id
        }
        return PuppiesLanguages.where(ids).destroy();
      }
      return Puppies.where({id: id}).destroy().then(function (message) {
        return PuppiesLanguages.where({puppy_id: id}).destroy();
      });
    },
    update: function (id, body) {
      return Puppies.forge({id: id}).fetch().then(function (puppy) {
        return puppy.save(body);
      })
    }
  },
  Languages: {
    get: function (id) {
      if (id) {
        return Languages.where({id: id}).fetch({withRelated: 'puppies'}).then(function (collection) {
          return collection.toJSON();
        })
      }
      return Languages.forge().orderBy('name', 'ASC').fetchAll({withRelated: 'puppies'}).then(function (collection) {
        return collection.toJSON();
      })
    },
    insert: function (data) {
      return Languages.forge(data).save();
    },
    destroy: function (id, puppy_id) {
      if (puppy_id) {
        var ids = {
          language_id: id,
          puppy_id: puppy_id
        }
        return PuppiesLanguages.where(ids).destroy();
      }
      return Languages.where({id: id}).destroy().then(function (message) {
        return PuppiesLanguages.where({language_id: id}).destroy();
      });
    },
    update: function (id, body) {
      return Languages.forge({id: id}).fetch().then(function (language) {
        return language.save(body);
      })
    }
  },
  PuppiesLanguages: {
    insert: function (data) {
      return PuppiesLanguages.forge(data).save();
    }
  },
  Search: function (search) {
    return Puppies.where('name', 'like', '%' + search + '%').fetchAll().then(function (puppies) {
      var puppies = puppies ? puppies.toJSON() : null;
      return Languages.where('name', 'like', '%' + search + '%').fetchAll().then(function (languages) {
        var languages = languages ? languages.toJSON() : null;
        return {puppies: puppies, languages: languages};
      })
    })
  }
}
