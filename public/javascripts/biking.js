var app = angular.module('myApp', ['components']);
function activitiesCtrl($scope, $http) {
	$scope.activities = [];

	$http.get('/bikingData').
        success(function(data) {
        	$scope.activities = bikingDataFormatter.formatData(data.activityList);
        });
}