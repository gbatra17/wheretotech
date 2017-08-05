//modules ====================================
var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || '3000';
var app = express();
var db = require('./config/db.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/client'));

app.listen(port, function() {
	console.log('MVC listening on port 3000!');
})


module.exports = app;