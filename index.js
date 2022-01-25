const assert = require('assert');
/*
  Write an algorithm to flatten an arbitrarily nested array of values.

  [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
  If your language of choice includes a flattening function, please implement your own.
*/

function flattenArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  return array.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return [...acc, ...flattenArray(current)];
    }
    return [...acc, current];
  }, [])
}

/* ==== Tests ==== */
assert.deepStrictEqual(flattenArray([]), [], 'Empty array');
assert.deepStrictEqual(flattenArray([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'Simple array');
assert.deepStrictEqual(flattenArray([ 1, [ 2, 3 ], 4 ]), [ 1, 2, 3, 4 ], 'Nested array (Depth = 1)');
assert.deepStrictEqual(flattenArray([ 1, [ 2, [ 3 ], [ 4, [ 5 ], 6 ] ], 7 ]), [ 1, 2, 3, 4, 5, 6, 7 ], 'Nested array (Depth > 2)');
assert.deepStrictEqual(flattenArray([ 1, [], 4 ]), [ 1, 4 ], 'Nested array (empty array inside)');

assert.deepStrictEqual(flattenArray("Array"), null, 'Non-array parameter (String)');
assert.deepStrictEqual(flattenArray(1), null, 'Non-array parameter (Number)');
assert.deepStrictEqual(flattenArray({ a: 1 }), null, 'Non-array parameter (Object)');
assert.deepStrictEqual(flattenArray([ [ 1 ], [ "string" ], [{ a: 1 }]]), [ 1, "string", { a: 1 } ], 'Array with different type of elements');

assert.deepStrictEqual(flattenArray([ 1, [ 2, [ 3 ] ], 4 ]), [ 1, 2, 3, 4 ], 'Provided test case');



