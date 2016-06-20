var express = require('express');
var router = express.Router();
var db = require('../db/api');

router.get('/', function(req, res, next) {
  db.Puppies.get().then(function (puppies) {
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
  db.Puppies.get(req.params.id).then(function (puppy) {
    return db.Languages.get().then(function (languages) {
      return { puppy: puppy, languages: languages}
    })
  }).then(function (data) {
    res.render('show', {
      item: data.puppy,
      list: data.languages,
      route: 'puppies',
      otherRoute: 'languages',
    });
  })
});

router.get('/edit/:id', function(req, res, next) {
  db.Puppies.get(req.params.id).then(function (puppy) {
    return db.Languages.get().then(function (languages) {
      return { puppy: puppy, languages: languages}
    })
  }).then(function (data) {
    res.render('edit', {
      item: data.puppy,
      list: data.languages,
      route: 'puppies',
      otherRoute: 'languages',
    });
  })
});

router.post('/', function (req, res, next) {
  db.Puppies.insert({name: req.body.name}).then(function (message) {
    res.redirect('/puppies');
  });
});

router.post('/edit/:id', function (req, res ,next) {
  var data = {
    language_id: req.body.id,
    puppy_id: req.params.id
  }
  var puppy = {
    name: req.body.name,
  }
  db.Puppies.update(req.params.id, puppy).then(function () {
    if (data.language_id) {
      return db.PuppiesLanguages.insert(data);
    }
  }).then(function (message) {
    res.redirect('/puppies/' + data.puppy_id);
  })
});

router.post('/delete/:id', function (req, res ,next) {
  db.Puppies.destroy(req.params.id, req.body.id).then(function() {
    res.redirect('/puppies/');
  })
});

module.exports = router;
