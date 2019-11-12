/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // object counter
  // iterate over characters in the string
  //    update counter for each character
  // iterate over characters in the string
  //    return the first string with object counter = 1
  // return empty string

  var counter = {};
  for (var i = 0; i < string.length; i++) {
    if (counter.hasOwnProperty(string[i])) {
      counter[string[i]]++;
    } else {
      counter[string[i]] = 1;
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (counter[string[i]] === 1) {
      return string[i];
    }
  }
  return '';
};
