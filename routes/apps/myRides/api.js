var request = require('request');

exports.bikeRides = {
	list: function(req, res) {
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