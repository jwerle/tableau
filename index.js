
/**
 * Generate a `nxn' tableau
 * ideally from a given alphabet
 *
 * @api public
 * @param {Array} alpha
 * @param {Function} algo - optional
 */

module.exports = tableau;
function tableau (alpha, algo) {
  var m = [];
  var l = alpha.length;

  algo = 'function' == typeof algo ? algo : function (x, y, l) {
    return (x + y) % l;
  };

  for (var y = 0; y < l; ++y) {
    m[y] = []; x = 0;
    for (var x = 0; x < l; ++x) {
      m[y][x] = alpha[algo(x, y, l)];
    }
  }

  return m;
}

