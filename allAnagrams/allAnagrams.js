/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  var results = [];
  var length = string.length;

  var helper = (currStr, remaining) => {
    for (var char of remaining) {
      var newStr = currStr + char;
      var temp = remaining.split('');
      temp.splice(temp.indexOf(char), 1);
      var newRemaining = temp.join('');
      //remove char from the remaining string
      // pass currStr and remaining as new arguments for another helper call
      helper(newStr, newRemaining);
//       results.push(currStr);
//       console.log(results);
    }
    if (currStr.length === length) {
      results.push(currStr);
    }  
  }

  for (var char of string) {
    var anagram = char;
    var remaining = string.slice(0, string.indexOf(char)) + string.slice(string.indexOf(char) + 1);
    helper(anagram, remaining);
  }
  return results;
};

// var anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]