var express = require('express');
var router = express.Router();
var userModel = require('../models/users');
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

/* Get a User */
router.get('/', function(req, res) {
	res.render('authentication/signup');
});

/* Create a User */
router.post('/', function(req, res) {
	var form_data = req.body;
	var validated = true;

	/*
	 * VALIDATIONS
	 */

	// Password
	if (form_data.password == undefined || form_data.password == "") {
		validated = false;
	}
	if (form_data.password != form_data.password_confirmation) {
		validated = false;
	}
	if (form_data.password.length < 4) {
		validated = false;
	}

	// Username
	if (form_data.username.length < 4) {
		validated = false;
	}
	if (form_data.username == undefined || form_data.username == "") {
		validated = false;
	}

	// First Name
	if (form_data.first_name == undefined || form_data.first_name == "") {
		validated = false;
	}	

	// Last Name
	if (form_data.last_name == undefined || form_data.last_name == "") {
		validated = false;
	}	

	if (validated) {
		var user = {
			"username": form_data.username,
			"password": form_data.password,
			"first_name": form_data.first_name,
			"last_name": form_data.last_name
		}
		userModel.add(user, callback(res));
	}
	else {
		res.redirect('/signup');
	}
});

module.exports = router;
