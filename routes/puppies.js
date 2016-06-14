var express = require('express');
var router = express.Router();
var Puppies = require('../models').puppies;
var Languages = require('../models').languages;
var PuppiesLanguages = require('../models').puppies_languages;

router.get('/', function(req, res, next) {
  Puppies.fetchAll({withRelated: 'languages'}).then(function (collection) {
    var puppies = collection.toJSON();
    res.render('showAll', {
      list: puppies,
      title: "Puppies",
      route: "puppies",
      otherRoute: "languages"
    });
  });
});

router.get('/add', function (req, res, next) {
  res.render('add', {title: "Puppy", route: "puppies"})
});

router.get('/:id', function(req, res, next) {
  Puppies.where({id: req.params.id}).fetch().then(function (collection) {
    var puppy = collection.toJSON();
    return Languages.fetchAll().then(function (collection) {
      var languages = collection.toJSON();
      return { puppy: puppy, languages: languages}
    })
  }).then(function (data) {
    console.log(data);
    res.render('show', {
      item: data.puppy,
      list: data.languages,
      route: 'puppies',
      otherRoute: 'languages',
    });
  })
});

router.post('/', function (req, res, next) {
  Puppies.forge({name: req.body.name}).save().then(function (message) {
    res.redirect('/puppies');
  });
});

router.post('/edit/:id', function (req, res ,next) {
  var data = {
    language_id: req.body.id,
    puppy_id: req.params.id
  }
  PuppiesLanguages.forge(data).save().then(function (message) {
    console.log(message);
    res.redirect('/puppies');
  });
});

router.post('/delete/:id', function (req, res ,next) {
  Puppies.where({id: req.params.id}).destroy().then(function (message) {
    return PuppiesLanguages.where({puppy_id:req.params.id}).destroy()
  }).then(function (message) {
    res.redirect('/puppies');
  })
});

module.exports = router;
