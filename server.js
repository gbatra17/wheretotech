var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true }));
app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res) {
	res.sendFile('index.html');
})

app.listen(3000, function() {
	console.log('MVC listening on port 3000!');
})