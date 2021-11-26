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


const takeUntil = function(array, callback) {
let newArray = [];
for(let item of array) {
  if (callback(item)) {
return newArray;
  } else {
    newArray.push(item);
  }
}
return newArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

//TEST CODE
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
