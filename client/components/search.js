angular.module('filter-gram')
.controller('SearchCtrl', function() {
	TeleportAutocomplete.init('#tp-input').on('change', function(value) {
		console.log(value); 
	})
})
.component('search', {
	controller:'SearchCtrl',
	templateUrl: '../views/search.html'
})