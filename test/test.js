var assert = require("assert");
var bikingDataFormatter = require('./../public/javascripts/bikingDataFormatter.js');
describe('bikingDataFormatter', function() {
	describe('formatData', function() {
		it('should combine two records with the same activityName', function() {
			var result = bikingDataFormatter.formatData([{activityName:'ride 1'},{activityName:'ride 1'}]);
			assert.equal(result.length, 1);
		});
		it('should not combine two records with different activityNames', function() {
			var result = bikingDataFormatter.formatData([{activityName:'ride 1'},{activityName:'ride 2'}]);
			assert.equal(result.length, 2);
		});
		it('should keep track of ride counts', function() {
			var result = bikingDataFormatter.formatData([{activityName:'ride 1'},{activityName:'ride 1'},{activityName:'ride 2'}]);
			assert.equal(result[0].rideCount, 2);
			assert.equal(result[1].rideCount, 1);
		});
	});
});