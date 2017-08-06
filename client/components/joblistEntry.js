angular.module('teleport')
.component('jobListEntry', {
	bindings: {
		job: '<'
	},
	templateUrl: '../views/jobListEntry.html'
})