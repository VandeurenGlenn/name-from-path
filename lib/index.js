'use strict';

/**
 * @module: name-from-path
 * @arg {buffer} file an buffer containing a path and base(path)
 * @arg {boolean} stripExt wether to return with extension (returns extension by default)
 */
module.exports = function (file, stripExt) {
  var arr = [String(file.path), String(file.base)];
  var a = arr[0].replace(arr[1], '');
  a = String(a).replace(/\\/g, '');
  if (stripExt) {
    a = String(a).replace(/\W?\.(.*)/g, '');
  }
  return a;
};
