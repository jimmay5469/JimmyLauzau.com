var app = angular.module('myApp', ['viewComponents']);
app.factory('dataFormatter', function() {
	return dataFormatters;
});