var request = require('request');

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
  res.render('index');
};
exports.biking = function(req, res){
  res.render('biking', { title: 'Biking' });
};
exports.bikingData = function(req, res){
	var url = 'https://connect.garmin.com/proxy/activitylist-service/activities/jimmay5469?start=0&limit=1000';
	request(url, function (error, response, body) {
		res.type('application/json');
		res.send(body);
	});
}