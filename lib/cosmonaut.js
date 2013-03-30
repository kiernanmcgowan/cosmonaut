// cosmonaut.js

// package wrapper
module.exports.server = function(packageLocation) {
  var launchpad = require('cosmonaut-launchpad');
  var payload = launchpad.package(packageLocation);

  launchpad.server(payload, {
    port: 3000
  });
};

module.exports.example = function(packageLocation) {
  var launchpad = require('cosmonaut-launchpad');
  console.log(packageLocation);
  var payload = launchpad.package(packageLocation);

  launchpad.server(payload, {
    port: 3000
  });
};
