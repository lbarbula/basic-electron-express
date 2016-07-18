var knex = require('./knex')

module.exports = {
  getItems: () => {
    return knex('item')
  }
}
