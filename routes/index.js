var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EXAMEN FINAL', subtitle: 'Avances en computacion'});
});

module.exports = router;
