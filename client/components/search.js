angular
  .module('teleport')
  .component('search', {
    templateUrl: '../views/search.html',
    controller: 'SearchCtrl',
  })
  .controller('SearchCtrl', ['$http', '$scope',
  	function($http, $scope) {

    $scope.Math = window.Math;
    $scope.showMe = false;
    
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
      	$scope.urbanScores = data.categories;
      });

    $http.get('/api/cities')
    .success(function(data) {
      $scope.cities = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error' + data);
    })

    $scope.deleteCity = function(id) {
    $http.delete('/api/cities/' + id)
        .success(function(data) {
            $scope.cities = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    $scope.showMeVault = function() {
      $scope.showMe = !$scope.showMe;
    }

    const format = function(languageString) {
      return languageString.split(';').map((language) => language.replace(' ', ''));
    }

    const manipulateData = function(data) {
      return data.reduce(function(total, el) {
        return total.concat(format(el.HaveWorkedLanguage));
      }, []);
    }

    const tallyLanguages = function(data) {
      var arrayOfLangs = manipulateData(data);
      var programmingLangsUnsorted = arrayOfLangs.reduce(function(totalLangs, lang){
        if(lang in totalLangs){
          totalLangs[lang]++;
        }
        else {
          totalLangs[lang] = 1;
        }
        return totalLangs;
      }, {})
      return programmingLangsUnsorted;
    }

    const sortLangObject = function(data) {
      var programmingLangsUnsorted = tallyLanguages(data);
      var sortable = [];
      for (var lang in programmingLangsUnsorted) {
          sortable.push([lang, programmingLangsUnsorted[lang]]);
      }
      sortable.sort(function(a, b) {
          return b[1] - a[1];
      });
      return sortable;
    }

    const getProgrammingDetails = function(countryName) {
      $scope.countryName = {
        countryName: countryName
      }
      $http.post('/api/countries', $scope.countryName)
      .success(function(data) {
        console.log(sortLangObject(data));
      })
      .error(function(data) {
        console.log('Error:', data);
      })
    }

    TeleportAutocomplete.init('#tp-input').on('change', function(value){
    	$scope.titleOfCity = {
        title: value.title,
        countryName: value.title.split(',')[2].replace(' ', '')
      };
      console.log($scope.titleOfCity.countryName);
      $scope.addCity = function(){
        $http.post('/api/cities', $scope.titleOfCity)
        .success(function(data) {
          $scope.cities = data;
          //console.log(data);
        })
        .error(function(data) {
          console.log('Error:' + data);
        })
      }
    	getCityInfo(value.uaSlug);
    	getCityImage(value.uaSlug);
    	getWeatherDetails(value.uaSlug);
      getUrbanDetails(value.uaSlug);
      getProgrammingDetails($scope.titleOfCity.countryName);
    })
  }]);
