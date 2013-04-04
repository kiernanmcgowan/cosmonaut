// cosmonaut.js

// package wrapper
module.exports.server = function(packageLocation) {
  var launchpad = require('cosmonaut-launchpad');
  var payload = launchpad.package(packageLocation);

  launchpad.server(payload, {
    port: 3000
  });
};


// server for example projects
module.exports.example = function(packageLocation) {
  var launchpad = require('cosmonaut-launchpad');
  var payload = launchpad.package(packageLocation);

  launchpad.server(payload, {
    port: 3000
  });
};
