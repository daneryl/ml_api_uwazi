//babel polyfill ES6
require('babel-core/register')();

var express = require('express');
var path = require('path');
//var compression = require('compression');
const app = express();

var http = require('http').Server(app);
//var error_handling_middleware = require('./app/api/utils/error_handling_middleware.js');
//app.use(error_handling_middleware);

//app.use(compression());

require('./api.js')(app, http);
//var ports = require('./app/api/config/ports.js');
//const port = ports[app.get('env')];
const port = 4000;

http.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

