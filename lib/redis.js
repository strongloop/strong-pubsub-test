var path = require('path');
var SANDBOX = path.join('..', __dirname, 'sandbox');
var fs = require('fs');
var spawn = require('child_process').spawn;
var debug = require('debug');

module.exports = function(port) {
  var options = {};

  if(debug.enabled()) {
    options = {
      stdio: ['ignore', process.stdout, process.stderr]
    }
  }

  return spawn('redis-server', 
    ['--port', port, '--loglevel', 'verbose'],
    options
  );
}
