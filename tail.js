const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

const tail = function(array) {
  //variable containing empty array to store new array
let newArray = [];
//looping through element of array
for (let item of array) {
  //adds element to the empty array
  newArray.push(item)
}
//removes first element from the array
newArray.shift()
//prints new array to console
console.log(newArray)
}

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!



