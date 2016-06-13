var express = require('express');
var router = express.Router();
var Puppies = require('../models/puppies');

router.get('/', function(req, res, next) {
  Puppies.fetchAll().then(function (collection) {
    var puppies = collection.toJSON();
    res.render('puppies', {list: puppies});
  });
});

router.get('/add', function (req, res, next) {
  res.render('add', {title: "Puppy", route: "puppies"})
});

router.post('/', function (req, res, next) {
  Puppies.forge({name: req.body.name}).save().then(function (message) {
    res.redirect('/puppies');
  });
});

router.post('/delete/:id', function (req, res ,next) {
  Puppies.where({id: req.params.id}).destroy().then(function (message) {
    res.redirect('/puppies');
  });
});

module.exports = router;
