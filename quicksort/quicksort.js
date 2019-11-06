/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
    if (array.length === 0 || array.length === 1) {
      return array;
    }
    var index = Math.floor(array.length/2);
    var pivot = array[index];
    array.splice(index,1);
    var upHalf = [];
    var lowHalf = [];
    for (var ele of array) {
      if (ele < pivot) {
          lowHalf.push(ele);
      } else {
          upHalf.push(ele);
      }
    }
    var sortLow = quicksort(lowHalf);
    var sortUp = quicksort(upHalf);
    if (pivot <= sortLow[0]) {
        sortLow.shift(pivot);
    } else if (pivot >= sortUp[sortUp.length]) {
        sortUp.push(pivot);
    } else {
        sortLow.push(pivot);
    } 
    return sortLow.concat(sortUp);
};

// console.log(quicksort([]));
// console.log(quicksort([3]));
// console.log(quicksort([3, 1, 2]));
// console.log(quicksort([2, 5, -1, 0, 4, 1, 11, 3]));
