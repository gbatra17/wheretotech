angular.module('teleport')
  .controller('jobListCtrl', function(teleportSearch){
  	this.jobs = teleportSearch.listOfJobs;
  	console.log(this.jobs);
  })
  .component('jobList', {
    // bindings: {
    //   jobs: '<',
    // },
    controller:'jobListCtrl',
    templateUrl: '../views/jobList.html'
  });