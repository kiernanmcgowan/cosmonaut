// cosmonaut.js

// package wrapper

var cosmonaut = {
  server: require('cosmonaut-server'),
  session: require('cosmonaut-session'),
  render: require('cosmonaut-render'),
  physics: require('cosmonaut-physics'),
  logic: require('cosmonaut-logic')
};

var server = cosmonaut.server(3000);
