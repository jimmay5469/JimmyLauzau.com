var app = angular.module('mainApp', ['viewComponents']).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl:'/home'}).
			when('/apps', {templateUrl:'/apps'}).
			when('/connect', {templateUrl:'/connect'}).
			when('/biking', {controller: ctrls.activitiesCtrl, templateUrl:'/biking'}).
			otherwise({redirectTo:'/'});
	});

app.factory('dataFormatter', function() {
	return dataFormatters;
});

function navCtrl($scope, $location) {
	$scope.location = $location;
}