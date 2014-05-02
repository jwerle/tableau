
/**
 * Generate a `nxn' tableau
 * ideally from a given alphabet
 *
 * @api public
 * @param {Array} alpha
 */

module.exports = tableau;
function tableau (alpha) {
  var m = [];
  var l = alpha.length;
  var y = 0;
  var x = 0;

  for (;y < l; ++y) {
    m[y] = []; x = 0;
    do { m[y][x] = alpha[(x++ + y) % l]; }
    while (x < l);
  }

  return m;
}

