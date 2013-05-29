(function(exports) {
	exports.formatBikingData = function(data, callback) {
		return data.reduce(function(res,obj) {
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
	}
})(typeof exports === 'undefined' ? this.dataFormatters = {} : exports);