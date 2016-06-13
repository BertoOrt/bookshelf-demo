module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/coding-puppies'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
}
