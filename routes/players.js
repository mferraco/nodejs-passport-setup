var express = require('express');
var router = express.Router();
var playerModel = require('../models/players');
var mongojs = require("mongojs");


function callback(res) {
	return function (err, data, message) {
		res.render('home', { 
			locals: {
				title: "FIFA League",
				data: data,
				message: message
			} 
		});
	}
}

/* GET - retrieve a player */
router.get('/', function(req, res) {
	var playerId = mongojs.ObjectId(req.param('id'));
  playerModel.find(playerId, callback(res));
});

router.get('/players', function(req, res) {
	playerModel.findAll(callback(res));
})

/* POST - create a player */
router.post('/', function(req, res) {
	var form_data = req.body;
	var player = {
		"first_name": form_data.first_name,
		"last_name": form_data.last_name
	}
	playerModel.add(player, callback(res));
});

module.exports = router;
