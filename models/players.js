var db = require('../config/db');

var players = {
	find: function(id, callback) {
		db.players.find({ _id: id }, function(err, player) {
			if (err || !player)
				callback(err, null, "Error - get player")
			else
				callback(player)
		});
	},
	findAll: function(callback) {
		db.players.findAll(function(err, players) {
			if (err || !players)
				callback(err, null, "Error - get all players");
			else {
				callbacl(null, players, null);
			}
		});
	},
	add: function(player, callback) {
		db.players.insert(player, function(err, player) {
			console.log(player);
			if (err)
				callback(err, null, "Error - post player")
			else {
				var message = player.first_name + " " + player.last_name + " successfully created.";
				callback(null, player, message)
			}
		});
	}
}

module.exports = players;