/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
    // we have a list/object with all the pieces
    // we traverse a tree of all possible combinations of pieces
    // whenever adding a coin puts us over the limit, we drop that branch
    // *--optimization: maybe each time we add a coin, we have a smaller list of coins to choose from
    // i.e. we can only choose from coins that are <= the remaining value
    // recursive: add a coin, then call makeChange again with the remaining value
    // here's the catch, though: 50p + 2p is the same as 2p + 50p
    // supposing we only choose from the array in one direction. i.e. once we've chosen 2p, we can't 
    // choose anything larger.
  
    var coins = [200, 100, 50, 20, 10, 5, 2, 1];
    var ways = 0;
  
    const helper = (remaining, coins, sum) => {
      for (var coin of coins) {
        // add coin to sum
        // if we reach the sum
        //    increment ways
        // else if we are under the sum:
        //   change coins array to only include that coin and smaller coins
        //   call helper function
        sum += coin;
        if (sum === remaining) {
            ways++;
            sum -= coin;
        } else if (sum < remaining) {
            var newCoins = coins.slice(coins.indexOf(coin));
            helper(remaining, coins, sum);
        } else sum -= coin;
      }
    };
  
    helper(total, coins, 0);
  
    return ways;
  };


