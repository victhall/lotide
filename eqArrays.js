const eqArrays = function(arrOne, arrTwo) {
  //looping through arrOne
  for(let item of arrOne) {
    //condition statement to check if elements in arrOne and arrTwo are equal
    if (arrOne[item] === arrTwo[item]) {
      return true
    }
    return false
  }
};

module.exports = eqArrays;




