/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  // first compare the keys to see if they're all the same
    // length should be same
    // value should be same
  // then compare the values to see if they're all the same
    // if the value on both is an object, run this comparison on the object
  var keys1 = Object.keys(apple);
  var keys2 = Object.keys(orange);
  if (keys1.length !== keys2.length) {
    return false;
  } 
  for (var key in apple) {
    if (!orange.hasOwnProperty(key)) {
      return false;
    } else if (typeof apple[key] === 'object') {
      debugger;
      var result = deepEquals(apple[key], orange[key]);
      if (result === false) {
        return false;
      }
    } else if (apple[key] !== orange[key]) {
      return false;
    }
  }
  return true;
};

console.log(deepEquals({selfie: 3},{selfie: 3})); //true
console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false