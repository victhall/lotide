const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 9, 3], [1, 6, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should FAIL

