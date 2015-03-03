var express = require('express');
var router = express.Router();
var auth = require('../config/auth');

/* GET home page. */
router.get('/', auth.isAuthenticated, function(req, res) {
  res.render('home', { title: 'Express' });
});

module.exports = router;
