var City = require('./models/city');
var Country = require('./models/country');

module.exports = function(app) {
  // Get all cities
  app.get('/cities', (req, res) => {
    City.find(function(err, cities) {
      if (err) res.send(err);
      res.json(cities);
    });
  });

  // Add new city
  app.post('/cities', (req, res) => {
    City.create({
      name: req.body.title,
    }, (err, city) => {
      if (err) res.send(err);
      City.find((err, cities) => {
        if (err) res.send(err);
        res.json(cities);
      });
    });
  });

  // Delete a city
  app.delete('/cities/:city_id', (req, res) => {
    City.remove({
      _id: req.params.city_id
    }, (err, city) => {
      if (err) res.send(err);

      City.find((err, cities) => {
        if (err) res.send(err);

        res.json(cities);
      });
    });
  });

  // Add new country
  app.post('/api/countries', function(req, res) {
    Country.find({
      'Country': req.body.countryName
    }, (err, countries) => {
      if (err) res.send(err);

      res.json(countries);
    });
  });
};
