const assertEqual = function (actual, expected) {
  //condition statement to check equality of actual and expected
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  //looping through arrOne
  for(let item of arrOne) {
    //condition statement to check if elements in arrOne and arrTwo are equal
    if (arrOne[item] === arrTwo[item]) {
      return true
    }
    return false
  }
  
}

assertEqual(eqArrays([1, 9, 3], [1, 6, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should FAIL


