var mongoose = require('mongoose');

var uri = 'mongodb://heroku_sw1rhwdk:aat5h7pb7gev9h0okb4cti9hj2@ds051640.mlab.com:51640/heroku_sw1rhwdk'

mongoose.Promise = global.Promise;

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Mongodb connection open');
});

module.exports = db;
