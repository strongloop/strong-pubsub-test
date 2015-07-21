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
