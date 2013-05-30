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