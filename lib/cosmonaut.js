// cosmonaut.js

// package wrapper

//module.exports = function (packageLocation) {

  var packageLocation = __dirname + '/../example/example-scene.js';

  var launchpad = require('cosmonaut-launchpad');
  var payload = launchpad.package(packageLocation);

  /**
   * Module dependencies.
   */

  var express = require('express'),
      http = require('http'),
      path = require('path');

  var app = express();

  app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('eB9mei3esheiL8Ahyiec3Og4AeyaeW5epu6imohCPa9eg9shaeW2pheepheuza6S'));
    app.use(express.session());
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/../public'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(payload);
  });

  app.configure('development', function() {
    app.use(express.errorHandler());
  });

  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

  http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });

//};
