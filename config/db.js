var databaseUrl = "mongodb://localhost:27017/fifa";
var collections = ["users", "players", "teams", "games"];
var mongojs = require("mongojs");

var db = mongojs.connect(databaseUrl, collections);

module.exports = db;
