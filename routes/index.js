var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('user').first()
  .then(function(user) {
  res.render('index', { title: user.name});
  })
});

router.get('/modal', function(req,res, next) {
  res.render('modal', {title: 'Hello World'})
})
module.exports = router;
