const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`)
  }
  };



   const eqObjects = function(objOne, objTwo) {
//Stores object keys of objOne and objTwo as an array in variables
const arrOne = Object.keys(objOne);
const arrTwo = Object.keys(objTwo);
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

    const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); 

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); 
