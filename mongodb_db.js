var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://127.0.0.1/food_blog';

var state = {
	db: null}

exports.connect = function(done) {
	if(state.db) return done;
	
	MongoClient.connect(url, function(err, client) {
		if(err) return done(err);
		state.db = client.db('food_blog_db');
		done();
	});
}

exports.getdb = function() {
	return state.db;
}

exports.close = function(done) {
	if(state.db) {
		state.db.close(function(err, result) {
			state.db = null;
			state.mode = null;
			done(err);
		});
	}
}

