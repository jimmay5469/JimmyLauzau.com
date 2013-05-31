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

app.animation('slide-down', function($rootScope) {
  return {
    setup: function(element) {
      $(element).css({display: 'none'});
    },
    start: function(element, done, memo) {
      $(element).slideDown(150, done);
    }
  };
});
app.animation('slide-up', function($rootScope) {
  return {
    start: function(element, done, memo) {
      $(element).slideUp(150, done);
    }
  };
});

function navCtrl($scope, $location) {
	$scope.location = $location;
}