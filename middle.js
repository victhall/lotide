// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length)
  return false;
  for(i = 0; i < arrOne.length; i++) {
if(arrOne[i] !== arrTwo[i])
return false;
    }
    return true;
  }

  const assertArraysEqual = function(arrOne, arrTwo) {
  if (!eqArrays(arrOne, arrTwo))
  return (console.log(`🚩🚩🚩 Assertion Failed: ${arrOne} !== ${arrTwo}`));
  return (console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`));
  }


// ACTUAL FUNCTION
function middle(array) {
  let middle = Math.floor(array.length / 2);
  let emptyarray = [];

  if (!array.length || array.length < 3) {
    return emptyarray;
  }
  else if (array.length % 2 !== 0) {
    return array[middle];
  } else {
    return [array[middle - 1], array[middle]];
  }
};
// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4] 
  