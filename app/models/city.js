var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  name: String,
});

var City = mongoose.model('City', citySchema);

module.exports = City;
