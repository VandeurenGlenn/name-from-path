'use strict';
var checkForMatch = require('check-for-match');

module.exports = function (arr, ext, cb) {
  var a = arr[0].replace(arr[1], '');
  checkForMatch(String(a), [/-(.*).html/g, /\\(.*)-(.*).*/g])
  .then(function (a) {
    if (ext !== undefined || ext === false) {
      a = String(a).replace(/.html/g, '');
    }
    a = String(a).replace(/\\/g, '');
    return cb(a);
  });
};
