/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    // marks that the spot has been visited
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    // checks if a spot has been visited
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  debugger;
  var pathCount = 0;
  const directions = [ [0, 1], [0, -1], [1, 0], [-1, 0]];
  board.togglePiece(i,j);
  while (!board.hasBeenVisited(n-1,n-1)) {
    for (let direction of directions) {
      i = i + direction[0];
      j = j + direction[1];
      if (!!board[i][j] && !board.hasBeenVisited(i, j)) {
        board.togglePiece(i, j);
        pathCount++;
      }
    }
  }
  return pathCount;
};

var board = makeBoard(1);
console.log(robotPaths(1, board, 0, 0)); // 0
var board = makeBoard(2);
console.log(robotPaths(2, board, 0, 0)); // 2
var board = makeBoard(3);
console.log(robotPaths(3, board, 0, 0)); // 10?