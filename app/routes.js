var City = require('./models/city');
var Country = require('./models/country');

module.exports = function(app) {

	//get all cities
	app.get('/api/cities', function(req, res) {

		City.find(function(err, cities) {
			if(err){
				res.send(err);
			}
			res.json(cities);
		});
	});

	app.post('/api/cities', function(req, res) {

		City.create({
			name : req.body.title,
		}, function(err, city) {
			if(err){
				res.send(err);
			}
			City.find(function(err, cities) {
				if(err){
					res.send(err);
				}
			res.json(cities);
		});
	});
});
	app.delete('/api/cities/:city_id', function(req, res) {
		City.remove({
			_id: req.params.city_id
		}, function(err, city) {
			if(err){
				res.send(err);
			}

			City.find(function(err, cities) {
				if(err){
					res.send(err)
				}
				res.json(cities);
			});
		});
	});

	app.post('/api/countries', function(req, res) {
		console.log('this is the req body', req.body);
		Country.find({'Country': req.body.countryName },function(err, countries) {
			if(err){
				res.send(err);
			}
			res.json(countries);
		});
	})
};