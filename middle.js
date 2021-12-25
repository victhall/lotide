const middle = function(arrOne) {
  //empty array to be returned if arrOne < 3
  let newArray = [];
    //divides array by 2 and rounds down if resulting number of elements is a decimal
  let middle = Math.floor(arrOne.length / 2);
  //condition - if arrOne is less than 3, return an empty array
  if(arrOne.length < 3) {
    return newArray;
    //if arrOne is odd, 
  } else if (arrOne.length % 2 !== 0) {
     return [arrOne[middle]]
  } else {
  //otherwise if arrOne is odd 
  return [arrOne[middle - 1], arrOne[middle]]
  }
  };

  module.exports = middle
