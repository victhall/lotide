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


const without = function(source, itemsToRemove) {
  //empty variable to store array
  let newArray = [];
  //loop through source
  for (let items of source) {
    //if itemsToRemove does not include elements found in source array
    //then push items that pass condition into newArray variable
  if (!itemsToRemove.includes(items)) {
    newArray.push(items)
  }
  } 
  //console.log(newArray)
  return newArray
  }
 
  // without([1, 2, 3], [1]) // => [2, 3]
  // without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const wordsOne = ["hello", "world", "lighthouse"];
without(wordsOne, ["lighthouse"]); 
assertArraysEqual(wordsOne, ["hello", "world", "lighthouse"]);
const wordsTwo = ["hello", "world", "Mouse"];
without(wordsTwo, ["lighthouse"]); 
assertArraysEqual(wordsTwo, ["hello", "world", "lighthouse"]);




