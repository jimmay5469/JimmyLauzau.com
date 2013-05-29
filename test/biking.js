var assert = require("assert");

var dataFormatters = require('./../public/js/biking/dataFormatters.js');
var ctrls = require('./../public/js/biking/controllers.js');

describe('biking', function() {
	describe('dataFormatters', function() {
		describe('formatBikingData', function() {
			it('should combine two records with the same activityName', function() {
				var result = dataFormatters.formatBikingData([{activityName:'ride 1'},{activityName:'ride 1'}]);
				assert.equal(result.length, 1);
			});
			it('should not combine two records with different activityNames', function() {
				var result = dataFormatters.formatBikingData([{activityName:'ride 1'},{activityName:'ride 2'}]);
				assert.equal(result.length, 2);
			});
			it('should keep track of ride counts', function() {
				var result = dataFormatters.formatBikingData([{activityName:'ride 1'},{activityName:'ride 1'},{activityName:'ride 2'}]);
				assert.equal(result[0].rideCount, 2);
				assert.equal(result[1].rideCount, 1);
			});
		});
	});
	describe('controllers', function() {
		describe('activitiesCtrl', function() {
			describe('constructor', function () {
				it('should initialize $scope.activities with data', function() {
					var gotData = false;

					var scopeMock = [];
					var httpMock = {
						get: function() {
							return { 
								success: function(callback) {
									gotData = true;
									callback({activityList:[{activityName:'ride 1'}]});
								}
							};
						}
					};
					var dataFormatterMock = dataFormatters;

					var ctrl = new ctrls.activitiesCtrl(scopeMock, httpMock, dataFormatterMock);

					assert.equal(gotData, true);
					assert.equal(scopeMock.activities.length, 1);
				});
			});
		});
	});
});