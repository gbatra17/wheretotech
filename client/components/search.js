// angular.module('teleport')
// .controller('SearchCtrl', function($http) {
// 	TeleportAutocomplete.init('#tp-input').on('change', function(value) {
// 		teleportSearch.search(value);
// 	});
// })
// .component('search', {
// 	bindings: {
// 		search: '<'
// 	},
// 	controller:'SearchCtrl',
// 	templateUrl: '../views/search.html'
// })

angular
  .module('teleport')
  .component('search', {
    templateUrl: '../views/search.html',
    controller: 'SearchCtrl',
  })
  .controller('SearchCtrl', function($http, $scope) {

  	// $scope.listOfJobs = [];

  	$scope.Math = window.Math;

    const citySalaryBySlug = slug =>
      `https://api.teleport.org/api/urban_areas/slug:${slug}/salaries`;

    const filterBySoftwareJobs = jobId => {
      const lowerJobId = jobId.toLowerCase();
      return (
        lowerJobId.includes('software') ||
        lowerJobId.includes('web') ||
        lowerJobId.includes('ux') ||
        lowerJobId.includes('system') ||
        lowerJobId.includes('developer')
      );
    };

    const filterByWeb = listJobs =>
      listJobs.filter(({ job }) => filterBySoftwareJobs(job.id));

    const getCityInfo = slug =>
      $http({
        method: 'GET',
        url: citySalaryBySlug(slug),
      }).then(({ data }) => {
        $scope.listOfJobs = filterByWeb(data.salaries);
      });

    TeleportAutocomplete.init('#tp-input').on('change', function(value){
    	$scope.titleOfCity = value.title;
    	getCityInfo(value.uaSlug);
    })
  });
