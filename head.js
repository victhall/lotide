const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

  const head = function(arr) {
    //Takes first element of arr and stores it in actual variable
    actual = arr[0]
    return actual
  }
//TEST CODE
  assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");