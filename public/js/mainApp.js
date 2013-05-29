var app = angular.module('mainApp', ['viewComponents']).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl:'/home'}).
			when('/biking', {controller: ctrls.activitiesCtrl, templateUrl:'/biking'}).
			otherwise({redirectTo:'/'});
	});

app.factory('dataFormatter', function() {
	return dataFormatters;
});