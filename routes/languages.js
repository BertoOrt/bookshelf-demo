var express = require('express');
var router = express.Router();
var Languages = require('../models/languages');

router.get('/', function(req, res, next) {
  Languages.fetchAll().then(function (collection) {
    var languages = collection.toJSON();
    res.render('languages', {list: languages});
  });
});

router.get('/add', function (req, res, next) {
  res.render('add', {title: "Language", route: "languages"});
});

router.post('/', function (req, res, next) {
  Languages.forge({name: req.body.name}).save().then(function (message) {
    res.redirect('/languages');
  });
});

router.post('/delete/:id', function (req, res ,next) {
  Languages.where({id: req.params.id}).destroy().then(function (message) {
    res.redirect('/languages');
  });
});

module.exports = router;
