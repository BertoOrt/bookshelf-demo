var express = require('express');
var router = express.Router();
var db = require('../db/api');

router.get('/', function(req, res, next) {
  db.Languages.get().then(function (languages) {
    res.render('showAll', {
      list: languages,
      title: "Languages",
      route: "languages",
      otherRoute: "puppies"
    });
  });
});

router.get('/add', function (req, res, next) {
  res.render('add', {title: "Language", route: "languages"})
});

router.get('/:id', function(req, res, next) {
  db.Languages.get(req.params.id).then(function (language) {
    return db.Puppies.get().then(function (puppies) {
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

router.get('/edit/:id', function(req, res, next) {
  db.Languages.get(req.params.id).then(function (language) {
    return db.Puppies.get().then(function (puppies) {
      return { language: language, puppies: puppies}
    })
  }).then(function (data) {
    res.render('edit', {
      item: data.language,
      list: data.puppies,
      route: 'languages',
      otherRoute: 'puppies',
    });
  })
});

router.post('/', function (req, res, next) {
  db.Languages.insert({name: req.body.name}).then(function (message) {
    res.redirect('/languages');
  });
});

router.post('/edit/:id', function (req, res ,next) {
  var data = {
    puppy_id: req.body.id,
    language_id: req.params.id
  }
  var language = {
    name: req.body.name,
  }
  db.Languages.update(req.params.id, language).then(function () {
    if (data.puppy_id) {
      return db.PuppiesLanguages.insert(data);
    }
  }).then(function (message) {
    res.redirect('/languages/' + data.language_id);
  })
});

router.post('/delete/:id', function (req, res ,next) {
  db.Languages.destroy(req.params.id, req.body.id).then(function() {
    res.redirect('/languages/');
  })
});

module.exports = router;
