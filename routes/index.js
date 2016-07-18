var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var db = require('../db/api')
/* GET home page. */
router.get('/', function(req, res, next) {
  db.getItems()
  .then(function(items){
    res.render('index', {item: items});
  })
});

router.get('/delete/:id', function(req, res, next){
  db.deleteItem(req.params.id)
  .then(function(){
    res.redirect('/')
  })
})

router.get('/modal', function(req,res, next) {
  res.render('modal', {title: 'Hello World'})
})

router.post('/', function(req, res, next){
  db.addItems(req.body)
  .then(function() {
    res.redirect('/')
  })
})
module.exports = router;
