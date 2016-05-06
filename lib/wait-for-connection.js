// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var net = require('net');

module.exports = function tryPort(port, cb) {
  var connection = net.createConnection(port);
  connection.on('error', function() {
    tryPort(port, cb);
  });
  connection.on('connect', function() {
    cb();
  });
}
