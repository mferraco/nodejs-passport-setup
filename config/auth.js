auth = {
	isAuthenticated: function (req, res, next) {
    if (req.user && req.user.isAuthenticated())
        return next();
    res.redirect('/login');
	}
};

module.exports = auth;