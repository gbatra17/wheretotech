// Modules
const express = require('express')
const router = express.Router()

// Models
var City = require('./models/city')
var Country = require('./models/country')

// Get all cities
router.get('/cities', (req, res) => {
  City.find((err, cities) => {
    if (err) res.send(err)
    res.json(cities)
  })
})

// Add new city
router.post('/cities', (req, res) => {
  City.create({
    name: req.body.title,
  }, (err, city) => {
    if (err) res.send(err)
    City.find((err, cities) => {
      if (err) res.send(err)
      res.json(cities)
    })
  })
})

// Delete a city
router.delete('/cities/:city_id', (req, res) => {
  City.remove({
    _id: req.params.city_id
  }, (err, city) => {
    if (err) res.send(err)

    City.find((err, cities) => {
      if (err) res.send(err)
      res.json(cities)
    })
  })
})

// Add new country
router.post('/countries', (req, res) => {
  Country.find({
    'Country': req.body.countryName
  }, (err, countries) => {
    if (err) res.send(err)
    res.json(countries)
  })
})

module.exports = router;
