var app = angular.module('mainApp', ['viewComponents']).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller: ctrls.homeCtrl, templateUrl:'/home.html'}).
			when('/apps', {controller: ctrls.appsCtrl, templateUrl:'/apps.html'}).
			when('/connect', {controller: ctrls.connectCtrl, templateUrl:'/connect.html'}).
			when('/apps/myRides', {controller: ctrls.activitiesCtrl, templateUrl:'/apps/myRides/index.html'}).
			otherwise({redirectTo:'/'});
	});

app.factory('dataFormatter', function() {
	return dataFormatters;
});

function navCtrl($scope, $location) {
	$scope.location = $location;
}