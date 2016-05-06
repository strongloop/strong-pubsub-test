// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var helpers = exports;

helpers.defineClientTests = require('./lib/client-api');
helpers.defineClientBehaviorTests = require('./lib/client-behavior');

helpers.defineBridgeBehaviorTests = require('./lib/bridge-behavior');

helpers.getFreePort = require('./lib/free-port');
helpers.waitForConnection = require('./lib/wait-for-connection');

helpers.setupMosquitto = require('./lib/mosquitto');
helpers.usingMosquitto = require('./lib/using-mosquitto');

helpers.setupRedis = require('./lib/redis');
helpers.usingRedis = require('./lib/using-redis');
