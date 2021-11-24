const eqObjects = function (objOne, objTwo) {
  //Stores object keys of objOne and objTwo as an array in variables
  const arrOne = Object.keys(objOne);
  const arrTwo = Object.keys(objTwo);
  console.log(Object.keys(objOne))
  //Compares object length
  if (arrOne.length !== arrTwo.length)
    return false;
  for (let key of arrOne) {
    //Use assertEqual function 
    if (Array.isArray(objOne[key]) || Array.isArray(objTwo[key])) {
      return (assertEqual(objOne[key], objTwo[key]));
      //If they're not an array, it assumes the values are primitives and compares them
    } else if (objOne[key] !== objTwo[key])
      return false
  }
  return true
};

const assertObjectsEqual = function (actual, expected) {
  //Import util library
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) return(console.log(`🚩🚩🚩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};

