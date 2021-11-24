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

  const without = function(source, itemsToRemove) {
    let filteredArray = [];
    for (const item of source) {
      if (itemsToRemove.includes(item)) {
      } else {
        filteredArray.push(item)
      };
    }
    return filteredArray
  }

  const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);