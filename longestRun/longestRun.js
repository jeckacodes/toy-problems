/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string.length === 0) {
    return null;
  }
  debugger;
  var pointerA = 0;
  var pointerB = 0;
  var tempA, tempB;
  // find the start of a run
  function findStart(string, index) {
    if (string.length === index) {
      return [pointerA, pointerB];
    }
    for (let i = index; i < string.length; i++) {
      if (string[i] === string[i+1]) {
        tempA = i;
        break;
      }
    }
    return findEnd(string, tempA);
  }
  // find the end of a run
  function findEnd(string, index) {
    for (let j = index; j < string.length; j++) {
      if (string[j] != string[j+1]) {
        tempB = j;
        if (tempB - tempA > pointerB - pointerA) {
          pointerA = tempA;
          pointerB = tempB;
        }
        break;
      }
    }
    return findStart(string, tempB+1);
  }
  // calculate its length
  // look for another run
  return findStart(string, 0);
};

console.log(longestRun("abbbcc")) // [1, 3]
// console.log(longestRun("aabbc"))  // [0, 1]
console.log(longestRun("abcd"))   // [0, 0]
console.log(longestRun(""))       // null

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
