## Bookshelf Demo

![Bookshelf](http://technikyle.com/bookshelf.png)

[Bookshelf](http://bookshelfjs.org/) is an ORM built on top of [Knexjs](http://knexjs.org/)
that can help query relationships in your database.

### The Set up

Similar to Knexjs, create a [file](https://github.com/BertoOrt/bookshelf-demo/blob/master/db/bookshelf.js) to export Bookshelf with its configurations.

Then, create the [models](https://github.com/BertoOrt/bookshelf-demo/tree/master/models) for each of your database tables. This is where you establish cardinality between your data tables.

### The Queries

The main difference from Knexjs is that in Bookshelf you want to forge() models and fetch() data. Look at the [code](https://github.com/BertoOrt/bookshelf-demo/blob/master/db/api.js) for a basic CRUD example.
