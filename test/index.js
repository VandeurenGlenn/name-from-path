'use strict';

var assert = require('assert');
var nameFromPath = require('../lib');

describe('name-from-path', function () {
  it('should return "io-el.html"!', function () {
    nameFromPath(['\\app\\elements\\io-el\\io-el.html', 'app\\elements'], true, function (name) {
      assert(name, 'io-el.html');
    });
  });

  it('should return "io-el"!', function () {
    nameFromPath(['\\app\\elements\\io-el\\io-el.html', 'app\\elements'], false, function (name) {
      assert(name, 'io-el');
    });
  });
});
