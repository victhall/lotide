const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

  const eqArrays = function(arrOne, arrTwo) {
  for(i = 0; i < arrOne.length; i++) {
if(arrOne[i] !== arrTwo[i])
return false;
    }
    return true;
  }

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);