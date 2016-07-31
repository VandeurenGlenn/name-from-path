'use strict';

/**
 * @module: name-from-path
 * @arg {buffer} file an buffer containing a path and base(path)
 * @arg {boolean} ext wether to return with extension (returns extension by default)
 */
module.exports = function (file, ext) {
  var arr = [String(file.path), String(file.base)];
  var a = arr[0].replace(arr[1], '');
  if (ext) {
    a = String(a).replace(/\W(.*)/g, '');
  }
  a = String(a).replace(/\\/g, '');
  return a;
};
