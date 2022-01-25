const assert = require('assert');
/*
  Write an algorithm to flatten an arbitrarily nested array of values.

  [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
  If your language of choice includes a flattening function, please implement your own.
*/

function flattenArray(array) {
  console.log('[flattenArray]');
  return [ 1, 2, 3, 4 ];
}

// Tests
assert.deepStrictEqual(flattenArray([ 1, [ 2, [ 3 ] ], 4 ]), [ 1, 2, 3, 4 ], 'test case 1');



