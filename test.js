
var tableau = require('./')
  , assert = require('assert')

var mat = null;

mat = tableau(['a', 'b', 'c']);

assert(3 === mat.length);
assert(3 === mat[0].length);
assert(3 === mat[1].length);
assert(3 === mat[2].length);

assert('a' == mat[0][0]);
assert('b' == mat[0][1]);
assert('c' == mat[0][2]);

assert('b' == mat[1][0]);
assert('c' == mat[1][1]);
assert('a' == mat[1][2]);

assert('c' == mat[2][0]);
assert('a' == mat[2][1]);
assert('b' == mat[2][2]);

