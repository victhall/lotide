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
};

module.exports = tail;


