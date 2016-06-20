var express = require('express');
var router = express.Router();
var db = require('../db/api');

router.get('/', function(req, res, next) {
  var search = req.query.search;
  if (search) {
    db.Search(req.query.search).then(function (data) {
      res.render('index', {
        search: search,
        puppies: data.puppies,
        languages: data.languages
      });
    })
  } else {
    res.render('index')
  }
});

module.exports = router;
