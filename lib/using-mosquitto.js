// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var getFreePort = require('./free-port');
var setupMosquitto = require('./mosquitto');
var waitForConnection = require('./wait-for-connection');

module.exports = function(cb) {
  getFreePort(function(port) {
    setupMosquitto(port);
    waitForConnection(port, function(err) {
      if(err) return cb(err);
      cb(null, port);
    });
  });
}
