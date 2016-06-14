module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/puppies_who_code'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
}
