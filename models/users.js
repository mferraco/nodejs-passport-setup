var db = require('../config/db');

var users = {
	find: function(id, callback) {
		db.users.find({ _id: id }, function(err, user) {
			if (err || !user)
				callback(err, null, "Error - get user")
			else
				callback(user)
		});
	},
	findAll: function(callback) {
		db.users.findAll(function(err, users) {
			if (err || !users)
				callback(err, null, "Error - get all users");
			else {
				callbacl(null, users, null);
			}
		});
	},
	add: function(user, callback) {
		db.users.insert(user, function(err, user) {
			console.log(user);
			if (err)
				callback(err, null, "Error - post user")
			else {
				var message = user.first_name + " " + user.last_name + " successfully created.";
				callback(null, user, message)
			}
		});
	}
}

module.exports = users;