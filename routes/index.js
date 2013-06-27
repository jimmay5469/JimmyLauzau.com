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
exports.apps = {
	index: function(req, res) {
		res.format({
			html: function() {
				res.render('apps');
			}
		});
	}
}
exports.connect = {
	index: function(req, res) {
		res.format({
			html: function() {
				res.render('connect');
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