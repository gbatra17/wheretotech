angular.module('teleport')
.service('teleportSearch', function($http) {
	this.search = function(value, callback) {
		$http({
		method: 'GET',
		url: `https://api.teleport.org/api/urban_areas/slug:${value.uaSlug}/salaries/`
		}).then(function({data}){
			if(callback){
				callback(data.salaries[45]);
			}
			// $scope.salaries = results.data.salaries[45];
		})
	}
})