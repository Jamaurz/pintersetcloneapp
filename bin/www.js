var app = require('../server/server');

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('running at localhost:' + port);
});
