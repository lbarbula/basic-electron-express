
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.text('name');
  })
};

exports.down = function(knex, Promise) {

};
