auth = {
	isAuthenticated: function (req, res, next) {
		console.log(req.user);
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
	}
};

module.exports = auth;