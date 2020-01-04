// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  var count = 0;
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }
  } else {
    var longer = str1.length > str2.length ? str1 : str2;
    var shorter = str1.length < str2.length ? str1 : str2;
    for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== shorter[i]) {
        if (shorter[i] === longer[i + 1]) {
          // this is an insertion
          count++;
          // insert the necessary character into shorter string
          shorter = shorter.substring(0,i) + longer[i] + shorter.substring(i,shorter.length);
        } else {
          // this is a replacement
          count++;
        }
      }
    }
  }
  return count;
}

console.log(editDistance('hello','hellos')); // 1
console.log(editDistance('henlo','hello')); // 1
console.log(editDistance('hello','herro')); // 2
console.log(editDistance('hello','herros')); // 3
console.log(editDistance('hello','heallo')); // 1