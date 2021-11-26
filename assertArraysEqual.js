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


assertArraysEqual(["hello", "world", "Victoria"], ["hello", "world", "lighthouse"]);
assertArraysEqual(["hello", "world", "Victoria"], ["hello", "world", "Victoria"]);