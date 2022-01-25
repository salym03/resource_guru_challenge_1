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
assert.deepStrictEqual(flattenArray([]), [], 'Empty array');
assert.deepStrictEqual(flattenArray([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'Simple array');
assert.deepStrictEqual(flattenArray([ 1, [ 2, 3 ], 4 ]), [ 1, 2, 3, 4 ], 'Nested array (Depth = 1)');
assert.deepStrictEqual(flattenArray([ 1, [ 2, [ 3 ], [ 4, [ 5 ], 6 ] ], 7 ]), [ 1, 2, 3, 4, 5, 6, 7 ], 'Nested array (Depth > 2)');
assert.deepStrictEqual(flattenArray([ 1, [], 4 ]), [ 1, 4 ], 'Nested array (empty array inside)');

assert.deepStrictEqual(flattenArray([ 1, [ 2, [ 3 ] ], 4 ]), [ 1, 2, 3, 4 ], 'Provided test case');



