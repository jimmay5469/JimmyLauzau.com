var request = require('request');

exports.layout = {
	index: function(req, res) {
		res.format({
			html: function() {
				res.render('layout');
			}
		});
	}
}
exports.home = {
	index: function(req, res) {
		res.format({
			html: function() {
				res.render('home');
			}
		});
	}
}
exports.biking = {
	index: function(req, res) {
		res.format({
			html: function() {
				res.render('biking', { title: 'Biking' });
			}
		});
	}
}
exports.bikingData = {
	index: function(req, res) {
		res.format({
			json: function() {
				var url = 'https://connect.garmin.com/proxy/activitylist-service/activities/jimmay5469?start=0&limit=1000';
				request(url, function (error, response, body) {
					res.send(body);
				});
			}
		});
	}
}