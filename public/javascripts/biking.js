var components = angular.module('components', []);
components.directive('myMap', function() {
	return {
		restrict: 'ECA',
		scope: {
			markers: '=markers'
		},
		link: function(scope, elem, attr) {
			google.maps.visualRefresh = true;
			var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(39.3, -95.9),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(elem[0], mapOptions);
			var infoWindow = new google.maps.InfoWindow({ content: '' });

			scope.$watch('markers', function(){
				if(scope.markers.length)
				{
					var bounds = new google.maps.LatLngBounds();
		            scope.markers.forEach(function(activity) {
						activity.marker = new google.maps.Marker({
							position: new google.maps.LatLng(activity.startLatitude, activity.startLongitude),
							map: map,
							title: activity.activityName
						});
			            google.maps.event.addListener(activity.marker, 'click', function () {
			            	infoWindow.close();
			            	var activityLink = '<a href="http://connect.garmin.com/activity/' + activity.activityId + '">' + activity.activityName + '</a>';
			            	infoWindow.setContent(activityLink);
			                infoWindow.open(map, activity.marker);
			            });
						bounds.extend(activity.marker.getPosition());
		        	});
		        	map.fitBounds(bounds);
				}
			});
		}
	};
});

var app = angular.module('myApp', ['components']);
function activitiesCtrl($scope, $http) {
	$scope.activities = [];

	$http.get('/bikingData').
        success(function(data) {
        	$scope.activities = bikingDataFormatter.formatData(data.activityList);
        });
}