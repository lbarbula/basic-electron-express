var knex = require('./knex')

module.exports = {
  getItems: () => {
    return knex('item')
  },
  deleteItem: (id) => {
    return knex('item').del().where('id', id)
  },
  addItems: (body) => {
    return knex('item').insert(body)
  }
}
