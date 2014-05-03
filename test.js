
var tableau = require('./')
  , assert = require('assert')
  , fmt = require('util').format

var mat = null;
var alpha = null;

function printf () {
  process.stdout.write(fmt.apply(null, arguments));
}

function draw (m) {
  for (var y = 0; y < m.length; ++y) {
    for (var x = 0; x < m[y].length; ++x) {
      printf("%s | ", m[y][x]);
    }
    printf("\n");
  }
  printf("\n");
}

alpha = 'abcdefgijklmnopqrstuvwxyz'.split('');
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

mat = tableau(alpha);
printf("Vigenère:\n");
draw(mat);

mat = tableau(alpha, function (x, y, l) { return ((l - x) + y) % l; });
printf("Beaufort:\n");
draw(mat);
