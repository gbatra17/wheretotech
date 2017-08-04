var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');

var port = process.env.PORT || '3000';
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(port, function() {
	console.log('MVC listening on port 3000!');
})


module.exports = app;