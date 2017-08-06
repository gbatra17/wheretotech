angular.module('teleport')
.service('teleportSearch', function($http) {
	let listOfJobs = [];

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

	this.search = function(value, callback) {
		$http({
		method: 'GET',
		url: `https://api.teleport.org/api/urban_areas/slug:${value.uaSlug}/salaries/`
		}).then(function({data}){
			if(callback){
				listOfJobs = filterByWeb(data.salaries);
			// console.log(filterByWeb(data.salaries));
			}
		})
	}
})