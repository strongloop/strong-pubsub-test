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
        var peer = this.peer = new Client(extend({
          port: this.broker.port
        }, options), Adapter);
        peer.subscribe(topic);
      });

      describe('when a client publishes a message', function () {
        beforeEach(function(done) {
          var test = this;
          this.topic = 'my test topic';
          this.publishedMsg = 'my test message';
          var client = this.client = new Client(extend({
            port: this.broker.port
          }, options), Adapter);

          client.publish(topic, msg);

          this.peer.on('message', function(topic, receivedMsg) {
            test.receivedMsg = receivedMsg;
            done();
          });
        });

        it('should be received by the subscriber', function (done) {
          expect(this.publishedMsg).to.equal(receivedMsg.toString());
        });
      });
    });
  });
}
