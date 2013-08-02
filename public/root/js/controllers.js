(function(exports) {
	exports.appsCtrl = function($scope) {
	}
	exports.connectCtrl = function($scope) {
	}
	exports.homeCtrl = function($scope) {
		$scope.links = [
			{title:'GitHub', url:'https://github.com/jimmay5469', target:'_blank'},
			{title:'Twitter', url:'https://twitter.com/jimmay5469', target:'_blank'},
			{title:'LinkedIn', url:'http://www.linkedin.com/in/jimmylauzau', target:'_blank'},
			{title:'more...', url:'#/connect', target:'_self'}
		];
	}
})(typeof exports === 'undefined' ? (typeof this.ctrls === 'undefined' ? this.ctrls = {} : this.ctrls) : exports);