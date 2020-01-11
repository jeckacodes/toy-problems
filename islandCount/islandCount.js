/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // for char in string
  //   if char not visited and char = 0 (land)
  //   mark char visited
  //   increment island counter
  //   findBorder()

  // findBorder(idx)
  //   var directions
  //   for ele of directions
  //     if string[ele] exists
  //       mark string[ele] as visited
  //       if string[ele] is land
  //         findBorder(ele)  <-- this marks all land that touches the island as visited
  var mapArray = mapStr.split('\n');
  console.log(mapArray);
  var visited = [];
  var map = [];
  for (let i = 0; i < mapArray.length; i++) {
    map.push([]);
    visited.push([]);
    for (let j = 0; j < mapArray[0].length; j++) {
      visited[i].push(false);
      map[i].push(mapArray[i][j]);
    }
  }
  debugger;
  var islandCount = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (!visited[i][j] && map[i][j] === '0') {
        visited[i][j] = true;
        islandCount++;
        findBorder(i,j);
    }
    }
  }
  function findBorder(i,j) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let ele of directions) {
      var newI = i + ele[0];
      var newJ = j + ele[1];
      if (newI > 0 && newJ > 0 && newI < map.length && newJ < map[0].length && !visited[newI][newJ]) {
        visited[newI][newJ] = true;
        if (map[newI][newJ] === '0') {
          findBorder(newI, newJ);
        }
      }
    }
  }
  return islandCount;
}

console.log(countIslands('00..\n00..\n..00')) // 2