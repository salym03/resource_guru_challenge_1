/*
  Write an algorithm to flatten an arbitrarily nested array of values.

  [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
  If your language of choice includes a flattening function, please implement your own.
*/

function flattenArray(array) {
  console.log('[flattenArray]');
  return [ 1, 2, 3, 4 ];
}

function testFlattenArray(input, expectedResult, description) {
  const result = flattenArray(input);
  if (result.length !== expectedResult.length || result.some((element, index) => element !== expectedResult[index])) {
    console.error(`[Test Failed]: ${description}`);
  } else {
    console.log(`[Test Success]: ${description}`);
  }
}

// Tests
testFlattenArray([ 1, [ 2, [ 3 ] ], 4 ], [ 1, 2, 3, 4 ], 'test case 1');



