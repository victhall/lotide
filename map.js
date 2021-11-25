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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom", "bowie"];
const words3 = ["apple", "bee", "cool", "deep", "egg"];

assertArraysEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words2, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words3, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words3, word => word[0]), [ 'a', 'b', 'c', 'd', 'e' ]);

