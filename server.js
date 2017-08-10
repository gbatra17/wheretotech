//modules ====================================
var express = require('express');
var partials = require('express-partials');
var morgan   = require('morgan'); 
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || '3000';
var app = express();
//config file that connects to mLabs database
var db = require('./app/config.js')

app.use(morgan('dev'));    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/client'));

//set up relative port since it's being deployed on Heroku
app.listen(port, function() {
	console.log('MVP listening on port 3000!');
})

//routes
require('./app/routes.js')(app);

module.exports = app;