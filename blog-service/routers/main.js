
var express = require('express');
var router= express.Router();

router.get('/', function(req, res, next) {
  // res.send('main-User'); 
  res.render('main/index');
})

module.exports= router;