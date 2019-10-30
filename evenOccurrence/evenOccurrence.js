/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // counts = {};
  // for each element in array
    // if counts does not have a key
      // add the value to the object
    // else
      // increment the value
  // once the counting is complete
  // iterate over the counts object
    // if the value is even, return the key
  // return null

  var counts = {};
  arr.forEach(function(item) {
    if (counts.hasOwnProperty(item)) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  });
  for (var key in counts) {
    if (counts[key] % 2 === 0) {
      return key;
    }
  }
  return null;
};