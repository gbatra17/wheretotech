// Modules
var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

// Config file that connects to mLabs database
var db = require('./server/config.js')
var API = require('./server/routes.js')
var port = process.env.PORT || '3000'
var app = express()

// Parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))
app.use(methodOverride('X-HTTP-Method-Override'))

// Static routing
app.use(express.static(__dirname + '/node_modules', {
  maxAge: 31557600000
}))
app.use(express.static(__dirname + '/client'))

// Routes
app.use('/api', API)

// Relative port listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`)
})
