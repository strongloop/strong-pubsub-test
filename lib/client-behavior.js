// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var extend = require('lodash').merge;
var expect = require('chai').expect;

module.exports = function(Client, Adapter, options) {
  options = options || {};

  describe('given an external broker server', function() {
    beforeEach(function() {
      this.broker = {port: this.port};
    });

    describe('when a peer is subscribed', function() {
      beforeEach(function() {
        var topic = this.topic = 'my test topic';
        var peer = this.peer = new Client(extend({
          port: this.broker.port
        }, options), Adapter);
        peer.subscribe(topic);
      });

      describe('when a client publishes a message', function () {
        beforeEach(function(done) {
          var test = this;
          this.publishedMsg = 'my test message';
          var client = this.client = new Client(extend({
            port: this.broker.port
          }, options), Adapter);

          client.publish(this.topic, this.publishedMsg);

          this.peer.on('message', function(topic, receivedMsg) {
            test.receivedMsg = receivedMsg;
            done();
          });
        });

        it('should be received by the subscriber', function () {
          expect(this.publishedMsg).to.equal(this.receivedMsg.toString());
        });
      });
    });
  });
}
