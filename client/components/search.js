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
  .controller('SearchCtrl', ['$http', '$scope',
  	function($http, $scope) {

  	// $scope.listOfJobs = [];

  	$scope.Math = window.Math;

    const citySalaryBySlug = slug =>
      `https://api.teleport.org/api/urban_areas/slug:${slug}/salaries`;

    const cityImageBySlug = slug =>
    	`https://api.teleport.org/api/urban_areas/slug:${slug}/images`;

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

    const getWeatherImage = slug =>
      $http({
        method: 'GET',
        url: cityImageBySlug(slug),
      }).then(({ data }) => {
      	var imageurl = data.photos[0].image.mobile;
      	      	console.log('this is the scope:', data.photos[0].image.mobile);
      	$scope.setBackground = function(){
    	return {
            'background-image':'url(' + imageurl + ')',
            'background-size': 'cover',
  			'max-width': '100%',
  			'max-height': '100%',
  			'border-radius': '10px',
  			'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

        }
		} 

      });  

    TeleportAutocomplete.init('#tp-input').on('change', function(value){
    	$scope.titleOfCity = value.title;
    	getCityInfo(value.uaSlug);
    	getWeatherImage(value.uaSlug)
    })
  }]);
