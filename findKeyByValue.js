const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  const findKeyByValue = function(obj, val) {
    const keyArr = Object.keys(obj);
    for (let item of keyArr) {
      if(obj[item] === val)
      return item
    }
  }
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);