/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var result = [];
  var counter = Math.ceil(matrix.length/2);
  function circle(matrix) {
    var width = matrix[0].length;
    var height = matrix.length;
    for (let ele of matrix[0]) {
      result.push(ele);
    }
    for (let i = 1; i < height; i++) {
      result.push(matrix[i][width - 1]);
    }
    for (let i = width - 2; i >= 0; i--) {
      result.push(matrix[height - 1][i]);
    }
    for (let i = height - 2; i > 0; i--) {
      result.push(matrix[i][0]);
    }
    matrix.pop();
    matrix.shift();
    for (let ele of matrix) {
      ele.pop();
      ele.shift();
    }
  }
  while (counter > 0) {
    circle(matrix);
    counter --;
  }
  return result;
};

console.log(spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));
console.log(spiralTraversal([
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
]));

console.log(spiralTraversal([
  [1,2],
  [3,4]
]));