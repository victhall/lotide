const eqArrays = require('./eqArrays') 

 const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
  console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`)
  } else if (eqArrays(arrOne, arrTwo ) === false) {
 console.log(`🚩🚩🚩 Assertion Failed: ${arrOne} !== ${arrTwo}`); 
  } else {
  }
}

module.exports = assertArraysEqual;