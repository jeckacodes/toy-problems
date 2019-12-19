/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // checkChars receives an array of strings and checks each string 
  // to see if there is a duplicate
  function checkChars(input) {
    for (let ele of input) {
      var count = {};
      for (let char of ele) {
        count[char] = count[char] ? count[char] + 1 : 1;
        if (count[char] > 1 || char === '0') {
          return false;
        }
      }

    }
    return true;
  }

  // do checkChars on each row
  var rows = board.split('\n');
  // do checkChars on each column
  var columns = [];
  for (let i = 0; i < 9; i++) {
    columns[i] = '';
    for (let j = 0; j < 9; j++) {
      columns[i] += rows[j][i];
    }
  }
  // do checkChars on each grid
  var grids = ['','','','','','','','',''];
  for (let i = 0; i < 3; i++) {
    grids[0] += rows[i].slice(0,3);
    grids[1] += rows[i].slice(3,6);
    grids[2] += rows[i].slice(6);
  }
  for (let i = 3; i < 6; i++) {
    grids[3] += rows[i].slice(0,3);
    grids[4] += rows[i].slice(3,6);
    grids[5] += rows[i].slice(6);
  }
  for (let i = 6; i < 9; i++) {
    grids[6] += rows[i].slice(0,3);
    grids[7] += rows[i].slice(3,6);
    grids[8] += rows[i].slice(6);
  }
  return checkChars(rows) && checkChars(columns) && checkChars(grids);
}

var test = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
var testcol = "735814296\n796285314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";

console.log(sudokuChecker(test));
console.log(sudokuChecker(testcol));