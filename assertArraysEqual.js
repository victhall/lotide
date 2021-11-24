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
