// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-test
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var assert = require('assert');
var helpers = require('../');

var fns = [
  'defineClientTests',
  'defineClientBehaviorTests',
  'defineBridgeBehaviorTests',
  'getFreePort',
  'waitForConnection',
  'setupMosquitto',
  'usingMosquitto',
  'setupRedis',
  'usingRedis',
];

describe('helpers', function() {
  fns.forEach(function(fn) {
    it('exports ' + fn, function() {
      assert.equal(typeof helpers[fn], 'function', fn + ' should be a function');
      assert(helpers[fn].length > 0, 'function', fn + ' should take arguments');
    });
  });
});
