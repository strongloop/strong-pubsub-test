// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var net = require('net');
var portrange = 9000;
 
module.exports = function getPort(cb) {
  var port = portrange;
  portrange += 1;
 
  var server = net.createServer();
  server.listen(port, function (err) {
    server.once('close', function () {
      cb(port);
    });
    server.close();
  });
  server.on('error', function (err) {
    getPort(cb);
  });
}
