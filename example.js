// example.js
// provide simple ways to run examples from command line

// if an example is given to run, else just run the basic example
var namedExample = (process.argv[2] || 'example');

var allowedExamples = ['example', 'n-body'];

if (allowedExamples.indexOf(namedExample) == -1) {
  throw new Error('No listing of example: ' + namedExample);
}

var cosmonaut = require('./index');

cosmonaut.example(__dirname + '/example/' + namedExample + '.js');
