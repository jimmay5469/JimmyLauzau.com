var app = angular.module('mainApp', ['viewComponents']).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller: ctrls.homeCtrl, templateUrl:'/home'}).
			when('/apps', {controller: ctrls.appsCtrl, templateUrl:'/apps'}).
			when('/connect', {controller: ctrls.connectCtrl, templateUrl:'/connect'}).
			when('/biking', {controller: ctrls.activitiesCtrl, templateUrl:'/biking'}).
			otherwise({redirectTo:'/'});
	});

app.factory('dataFormatter', function() {
	return dataFormatters;
});

function navCtrl($scope, $location) {
	$scope.location = $location;
}