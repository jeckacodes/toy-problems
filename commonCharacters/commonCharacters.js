/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(...strings) {
  // debugger;
  var string1 = strings[0];
  strings.splice(0, 1);
  var count = {};
  var result = '';

  var helper = (char, strings) => {
    for (var string of strings) {
      if (!string.includes(char)) {
        return false;
      }
    }
    return true;
  }

  for (var char of string1) {
    if (helper(char, strings) && !count.hasOwnProperty(char)) {
      count[char] = 1;
      result += char;
    }
  }
  return result;
};

console.log(commonCharacters('aceixivou', 'aegihobu', 'tulkieoejar')); // 'aeiou'
