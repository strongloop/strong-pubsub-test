// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
