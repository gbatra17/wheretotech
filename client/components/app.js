angular.module('teleport')
.controller('appCtrl', function(teleportSearch){
  	this.jobs = teleportSearch.listOfJobs;
})
.component('app', {
	controller: 'appCtrl',
	templateUrl: '../views/app.html'
})