const eqArrays = function(array1, array2) {
  // Make sure the arrays have the same length
  if (array1.length !== array2.length) return false;
  // Iterate over each element of both arrays and compare them
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// Assertion function
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) return(console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`));
  return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
}


const letterPositions = function(sentence) {
const results = {};
let index = 0;
for (let letter of sentence) {
if (letter !== " ") {
if (results[letter]) {
results[letter].push(index);
index++;
} else {
results[letter] = [index];
index++;
 }
} else { 
index++; 
 }
}
return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello hello").o, [4, 10]);