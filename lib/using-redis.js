// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var helpers = require('../');
var getFreePort = helpers.getFreePort;
var waitForConnection = helpers.waitForConnection;
var setupRedis = require('./redis');

module.exports = function(cb) {
  getFreePort(function(port) {
    var redis = setupRedis(port);
    waitForConnection(port, function(err) {
      if(err) return cb(err);
      cb(null, port, redis);
    });
  });
}
