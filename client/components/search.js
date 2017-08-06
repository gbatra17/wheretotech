angular.module('teleport')
.controller('SearchCtrl', function($http, teleportSearch) {
	TeleportAutocomplete.init('#tp-input').on('change', function(value) {
		// $http({
		// method: 'GET',
		// url: `https://api.teleport.org/api/urban_areas/slug:${value.uaSlug}/salaries/`
		// }).then(function({data}){
		// 	$scope.salaries = results.data.salaries[45];
		// })
		teleportSearch.search(value, function(value) {
			console.log(value);
		});
	});
	this.hello = "garima";
})
.component('search', {
	bindings: {
		result: '<'
	},
	controller:'SearchCtrl',
	templateUrl: '../views/search.html'
})