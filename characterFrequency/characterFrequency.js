/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  // count character frequency
  var counted = count(string);
  console.log(counted)
  // sort by character ascending
  var sortedChar = sortChar(counted);
  console.log(sortedChar)
  // sort by frequency descending
  var sortedFreq = sortFreq(sortedChar);
  console.log(sortedFreq)
  return sortedFreq;
};

function count(string) {
  var dict = {};
  for (let char of string) {
    dict[char] = dict.hasOwnProperty(char) ? dict[char] + 1 : 1;
  }
  var result = [];
  for (let pair in dict) {
    result.push([pair, dict[pair]]);
  }
  return result;
}

function sortFreq(array) {
  var quicksort = function(arr) {
    debugger;
    if (arr.length <= 1) {
      return arr;
    }
    var pivot = arr[0];
    var left = arr.slice(1).filter((ele) => {
      return ele[1] >= pivot[1];
    });
    var right = arr.slice(1).filter((ele) => {
      return ele[1] < pivot[1];
    });
    return quicksort(left).concat( [pivot], quicksort(right));
  }
  return quicksort(array);
}

function sortChar(array) {
  var quicksort = function(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var pivot = arr[0];
    var left = arr.slice(1).filter((ele) => {
      return ele[0] >= pivot[0];
    });
    var right = arr.slice(1).filter((ele) => {
      return ele[0] < pivot[0];
    });
    return quicksort(left).concat( [pivot], quicksort(right));
  }
  return quicksort(array);
}

console.log(characterFrequency('paella'))
console.log(characterFrequency('mississippi'))
console.log(characterFrequency('mmmaaaiiibbb'))