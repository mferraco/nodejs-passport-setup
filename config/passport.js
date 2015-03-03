var LocalStrategy = require('passport-local').Strategy;
var db = require('../config/db');
var mongojs = require("mongojs");

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
	  done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
	  db.users.findOne({ _id: mongojs.ObjectId(id) }, function(err, user) {
	    done(err, user);
	  });
	});

	passport.use(new LocalStrategy(
		function(username, password, done) {
		  db.users.findOne({ username: username, password: password }, function(err, user) {
		    if (err) { return done(err); }
		    if (!user) {
		      return done(null, false, { message: 'Invalid login credentials.  Try again.' });
		    }
		    console.log(user);
		    return done(null, user);
		  });
		}
	));
}