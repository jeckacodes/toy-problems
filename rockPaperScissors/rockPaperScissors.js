/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  var result = [];
  var throws = ['R', 'P', 'S'];
  //for first character in the three-character string
  var currentArr = [];
  for (var i = 0; i < throws.length; i++) {
    currentArr[0] = throws[i];
    //rock, paper, or scissors
    //for second character
    for (var j = 0; j < throws.length; j++) {
      //rock, paper, or scissors
      currentArr[1] = throws[j];
      //for third character
      for (var k = 0; k < throws.length; k++) {
        //rock, paper, scissors
        currentArr[2] = throws[k];
        result.push(currentArr.join(''));
      }
    }
  }
  return result;
};

// console.log(rockPaperScissors());

