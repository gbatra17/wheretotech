angular.module('teleport')
.component('app', {
	controller: 'appCtrl',
	templateUrl: '../views/app.html'
})
.controller('appCtrl', function(teleportSearch){
	this.search = function(value){
		this.value = value;
	};
	this.name = 2;
})