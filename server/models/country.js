var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
  Country: String,
  HaveWorkedLanguage: String,
  WantWorkLanguage: String,
  HaveWorkedFramework: String,
  WantWorkFramework: String,
  HaveWorkedDatabase: String,
  WantWorkDatabase: String
}, {
  collection: 'countries'
});

var Country = mongoose.model('Country', countrySchema);

module.exports = Country;
