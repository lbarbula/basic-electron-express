var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var db = require('../db/api')
/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('user').first()
  .then(function(user) {
  db.getItems.then(function(items){
    res.render('index', { title: user.name, item: items});

  })
  })
});

router.get('/modal', function(req,res, next) {
  res.render('modal', {title: 'Hello World'})
})
module.exports = router;
