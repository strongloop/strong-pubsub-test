# strong-pubsub-test

This module is a set of utilities for testing other **strong-pubsub** modules.

**Testing a Client Adapter API**

```js
var helpers = require('strong-pubsub-test');
var getPort = helpers.getFreePort;
var defineClientTests = helpers.defineClientTests;

// this example uses mosquitto, use your own broker
var usingMosquitto = helpers.usingMosquitto;

describe('MQTT', function () {
  beforeEach(function(done) {
    var test = this;
    usingMosquitto(function(err, port) {
      // test.port is required by client tests
      test.port = port;
      done(err);
    });
  });

  defineClientTests(Client, Adapter);
});
```

**Testing a Client Adapter Behavior**

```js
var helpers = require('strong-pubsub-test');
var defineClientBehaviorTests = helpers.defineClientBehaviorTests;

// this example uses mosquitto, use your own broker
var usingMosquitto = helpers.usingMosquitto;

beforeEach(function(done) {
  var test = this;
  usingMosquitto(function(err, port) {
    // required by the behavior tests
    test.port = port;
    done(err);
  });
});

defineClientBehaviorTests(Client, Adapter);
```
