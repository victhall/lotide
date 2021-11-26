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
  if (eqArrays(arrOne, arrTwo) === true) {
  console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`)
  } else if (eqArrays(arrOne, arrTwo ) === false) {
 console.log(`🚩🚩🚩 Assertion Failed: ${arrOne} !== ${arrTwo}`); 
  } else {
  }
}


// ACTUAL FUNCTION
const middle = function(arrOne) {
  //empty array to be returned if arrOne < 3
  let newArray = [];
    //divides array by 2 and rounds down if resulting number of elements is a decimal
  let middle = Math.floor(arrOne.length / 2);
  //condition - if arrOne is less than 3, return an empty array
  if(arrOne.length < 3) {
    return newArray;
    //if arrOne is odd, 
  } else if (arrOne.length % 2 !== 0) {
     return [arrOne[middle]]
  } else {
  //otherwise if arrOne is odd 
  return [arrOne[middle - 1], arrOne[middle]]
  
  }
  
  }
  //TEST CODE
  assertArraysEqual(middle([1]), []); // => []
  assertArraysEqual(middle([1, 2]), []); // => []
  assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6,8,9,7]), [3, 4]); // => [3, 4] 
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6,8,9,7]), [7, 4]); // => [3, 4]