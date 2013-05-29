(function(exports) {
	exports.activitiesCtrl = function($scope, $http, dataFormatter) {
		$scope.activities = [];

		$http.get('/biking').
	        success(function(data) {
	        	$scope.activities = dataFormatter.formatBikingData(data.activityList);
	        });
	}
})(typeof exports === 'undefined' ? this.ctrls = {} : exports);