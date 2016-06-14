var express = require('express');
var router = express.Router();
var Languages = require('../models').languages;
var Puppies = require('../models').puppies;
var PuppiesLanguages = require('../models').puppies_languages;

router.get('/', function(req, res, next) {
  Languages.fetchAll({withRelated: 'puppies'}).then(function (collection) {
    var languages = collection.toJSON();
    res.render('showAll', {
      list: languages,
      title: "Programming Languages",
      route: "languages",
      otherRoute: "puppies"
    });
  });
});

router.get('/add', function (req, res, next) {
  res.render('add', {title: "Language", route: "languages"});
});

router.get('/:id', function(req, res, next) {
  Languages.where({id: req.params.id}).fetch().then(function (collection) {
    var language = collection.toJSON();
    return Puppies.fetchAll().then(function (collection) {
      var puppies = collection.toJSON();
      return { language: language, puppies: puppies}
    })
  }).then(function (data) {
    res.render('show', {
      item: data.language,
      list: data.puppies,
      route: 'languages',
      otherRoute: 'puppies',
    });
  })
});

router.post('/', function (req, res, next) {
  Languages.forge({name: req.body.name}).save().then(function (message) {
    res.redirect('/languages');
  });
});

router.post('/edit/:id', function (req, res ,next) {
  var data = {
    puppy_id: req.body.id,
    language_id: req.params.id
  }
  PuppiesLanguages.where(data).fetch().then(function (collection) {
    PuppiesLanguages.forge(data).save().then(function (message) {
      res.redirect('/languages');
    });
  })
});

router.post('/delete/:id', function (req, res ,next) {
  Languages.where({id: req.params.id}).destroy().then(function (message) {
    res.redirect('/languages');
  });
});

module.exports = router;
