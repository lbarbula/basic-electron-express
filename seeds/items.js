
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('item').insert({name: 'Clean Bathroom'}),
        knex('item').insert({name: 'Wash the car'})
      ]);
    });
};
