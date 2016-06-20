var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);
// Add registry to built relationships by name
bookshelf.plugin('registry');

module.exports = bookshelf;
