var City = require('./models/city.js');

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
			text : req.body.text,
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
};