var app2 = require('./server.js');

app2.listen(3000, function() {
  console.log('server is listening on 8000');
});

console.log(app2.garima);
