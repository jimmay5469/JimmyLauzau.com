var app = angular.module('myApp', []);

function activitiesCtrl($scope, $http) {
	$scope.activities = [];

	google.maps.visualRefresh = true;
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(39.3, -95.9),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var infoWindow = new google.maps.InfoWindow({ content: '' });

	$http.get('/bikingData').
        success(function(data,status,headers,config) {
        	data.activityList = data.activityList.reduce(function(res,obj) {
        		if(obj.activityName) {
					if(!(obj.activityName in res)) {
						obj.rideCount = 1;
						res.__array.push(res[obj.activityName] = obj);
					} else {
						res[obj.activityName].rideCount++;
					}
				}
				return res;
			}, {__array:[]}).__array;

        	$scope.activities = data.activityList;

			var bounds = new google.maps.LatLngBounds();
            $scope.activities.forEach(function(activity) {
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
        }).
        error(function(data,status,headers,config) {
            //alert('error loading data');
        });
}