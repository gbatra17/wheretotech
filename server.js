var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true }));
app.get('/', function(req, res) {
	res.send('<h1> hello world! </h1>');
})
