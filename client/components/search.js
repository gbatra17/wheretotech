angular
  .module('teleport')
  .component('search', {
    templateUrl: '../views/search.html',
    controller: 'SearchCtrl',
  })
  .controller('SearchCtrl', ['$http', '$scope',
  	function($http, $scope) {

  	$scope.Math = window.Math;

    const citySalaryBySlug = slug =>
      `https://api.teleport.org/api/urban_areas/slug:${slug}/salaries`;

    const cityImageBySlug = slug =>
    	`https://api.teleport.org/api/urban_areas/slug:${slug}/images`;

    const cityWeatherBySlug = slug =>
    	`https://api.teleport.org/api/urban_areas/slug:${slug}/details`;

    const cityScoresBySlug = slug =>
    	`https://api.teleport.org/api/urban_areas/slug:${slug}/scores`;

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

    const getCityImage = slug =>
      $http({
        method: 'GET',
        url: cityImageBySlug(slug),
      }).then(({ data }) => {
      	var imageurl = data.photos[0].image.mobile;
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

    const getWeatherDetails = slug =>
      $http({
        method: 'GET',
        url: cityWeatherBySlug(slug),
      }).then(({ data }) => {
      	//weather is category number two 
        $scope.weather = data.categories[2].data;
      });

    const getUrbanDetails = slug =>
      $http({
        method: 'GET',
        url: cityScoresBySlug(slug),
      }).then(({data}) => {
      	console.log(data);
      	$scope.summary = data.summary;
      	$scope.urbanScores = data.categories;
      });

    TeleportAutocomplete.init('#tp-input').on('change', function(value){
    	$scope.titleOfCity = value.title;
    	getCityInfo(value.uaSlug);
    	getCityImage(value.uaSlug);
    	getWeatherDetails(value.uaSlug);
    	getUrbanDetails(value.uaSlug);
    })
  }]);
